const express = require("express");
const listRouter = express.Router();
const Lists = require("../schema/list");
const counters = require("../schema/counter");
const axios = require("axios");

listRouter.post("/", async (req, res) => {
  try {
    const { cateId, area, district, sort, program: programs, rank: ranks, page } = req.body.area;

    const isAll = programs[0] === "all";

    const program = isAll ? ["인지기능 향상", "운동 보조", "기타 프로그램"] : programs;
    const rank = ranks[0] === "all" ? ["A", "B", "C", "D", "E", "none", "new"] : ranks;

    const arr = {
      cateId,
      area,
      rank,
      district,
    };

    if (district === "전체") {
      delete arr.district;
    }

    if (isAll) {
      arr["$or"] = [{ "navId.program.name": { $in: program } }, { "navId.program.name": { $exists: false } }];
    } else {
      arr["$and"] = [{ "navId.program.name": { $in: program } }, { "navId.program.name": { $exists: true } }];
    }

    let sorts;

    switch (Number(sort)) {
      case 10:
        sorts = { recommendScore: -1 };
        break;
      case 20:
        sorts = { views: -1 };
        break;
      case 30:
        sorts = { totalCounselCount: -1 };

      default:
        break;
    }

    const documentCount = await Lists.find(arr).count();

    const AllPages = documentCount - page <= 10 ? documentCount : page;

    const result = await Lists.find(arr)
      .select("address area district title establish images rank onlineCounsel id thumbNail")
      .sort(sorts)
      .limit(AllPages);

    const newArr = {
      result,
      documentCount,
    };

    return res.send(newArr);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

listRouter.get("/details/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const findItem = await Lists.findOne({ id }).select(
      "area title address onlineCounselCount phoneCounselCount establish onlineCounsel counselDetails rank images cateId views navId"
    );

    if (!findItem) {
      return res.status(404).send("not found page");
    }

    const viewplus = (findItem.views += 1);
    const address = findItem.address;

    await Lists.findOneAndUpdate({ id }, { views: viewplus });

    const response = await axios.get(`https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query=${address}`, {
      headers: {
        "X-NCP-APIGW-API-KEY-ID": process.env.REACT_APP_NAVERMAP_API_KEY_ID,
        "X-NCP-APIGW-API-KEY": process.env.REACT_APP_NAVERMAP_API_KEY,
      },
    });

    const location = response.data.addresses[0];

    const newItem = {
      item: findItem,
      location,
    };

    return res.send(newItem);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

listRouter.get("/galleryList/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const findGalleryList = await Lists.findOne({ id }).select({ navId: { $elemMatch: { id: 3 } } });

    if (!findGalleryList) {
      return res.status(404).send("Not found page");
    }

    const result = findGalleryList.navId[0].notice;

    return res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

listRouter.get("/gallery", async (req, res) => {
  try {
    const { noticeId, id } = req.query;

    const findGallery = await Lists.aggregate([
      { $unwind: "$id" },
      {
        $match: { id: Number(id) },
      },
      { $unwind: "$navId" },
      {
        $match: { "navId.id": 3 },
      },
      { $unwind: "$navId.notice" },
      {
        $match: { "navId.notice.noticeId": Number(noticeId) },
      },

      {
        $group: {
          _id: "$_id",
          navId: { $push: "$navId" },
        },
      },
    ]);

    if (findGallery.length === 0) {
      return res.status(404).send("not found page");
    }

    const result = findGallery[0].navId[0].notice;

    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

listRouter.post("/sendCousenlData", async (req, res) => {
  try {
    const { newAnswer, id } = req.body;

    const str = newAnswer.phoneNum;
    const restPhoneNumber = Number(str.slice(7, str.length));
    const findViews = await Lists.findOne({ id }).select("views counselDetails phoneCounselCount");

    const randomNum = Math.floor(Math.random() * 1000);

    const ids = `QA${createID(findViews.views + restPhoneNumber) + randomNum}`;

    const date = new Date();

    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1);
    const day = String(date.getDate());

    const publishedDate = `${year}-${month}-${day}`;

    const updateAnswer = {
      ...newAnswer,
      id: ids,
      publishedDate,
      view: 0,
    };

    const onlineCounselCount = findViews.counselDetails.length + 1;

    const totalCounselCount = findViews.phoneCounselCount + onlineCounselCount;

    const result = await Lists.findOneAndUpdate(
      { id },
      { $push: { counselDetails: updateAnswer }, onlineCounselCount, totalCounselCount },
      { new: true }
    );

    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

listRouter.get("/fetchQAItem/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const findQAItem = await Lists.aggregate([
      // 배열 필드를 풀어내어 각 배열 요소를 개별 문서 만듬
      { $unwind: "$counselDetails" },

      // 조건에 맞는 배열 요소 필터링
      { $match: { "counselDetails.id": id } },

      // 그룹핑하여 배열 재구성
      {
        $group: {
          _id: "$_id", // 기존 문서의 _id를 기준으로 그룹화
          counselDetails: { $push: "$counselDetails" }, // 필요한 필드를 다시 배열로 재구성
        },
      },
    ]);

    if (findQAItem.length < 1) {
      return res.status(404).send("not found page");
    }

    const view = (findQAItem[0].counselDetails[0].view += 1);

    await Lists.findOneAndUpdate({ "counselDetails.id": id }, { "counselDetails.$.view": view });

    return res.send(findQAItem[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

function createID(itemId) {
  const date = new Date();

  const year = String(date.getFullYear()).substring(2, 4);
  const month = String(date.getMonth() + 1);
  const categoryId = String(5).padStart(2, "0");

  const id = String(itemId).padStart(4, "0");

  const result = Number(year + month + categoryId + id);

  return result;
}

//인덱스
// listRouter.get("/counter", async (req, res) => {
//   try {
//     const insertSeq = await counters.insertMany({ indexName: "list" });

//     res.send(insertSeq);
//   } catch (e) {
//     console.log(e);
//   }
// });

//실제 데이터 삽입
// listRouter.post("/insert", async (req, res) => {
//   const {
//     cateId,
//     area,
//     district,
//     title,
//     address,
//     images,
//     counselDetails,
//     phoneCounselCount,
//     rank,
//     establish,
//     watingPerson,
//     onlineCounsel,
//     navId,
//   } = req.body;

//   const arr = images;
//   let thumbNail = images[0];

//   if (images.length < 1) {
//     thumbNail = "https://jin-project.s3.ap-northeast-2.amazonaws.com/ddoga/none.jpeg";
//   } else if (images.length > 1) {
//     const lastImage = images[images.length - 1];
//     const firstImage = images[0];

//     arr.push(firstImage);
//     arr.unshift(lastImage);
//   }

//   const saveThumbNail = () => {
//     navId[0]?.workerProfile?.map((item) => {
//       const photo = "https://jin-project.s3.ap-northeast-2.amazonaws.com/ddoga/profile_empty.svg";

//       if (item.photo === "") item.photo = photo;
//     });

//     navId[2]?.notice?.map((item) => {
//       const thumbNail = item.content.img[0];

//       item.thumbNail = thumbNail;
//     });
//   };

//   saveThumbNail();

//   const saveRecommendScore = () => {
//     const listThumbNailLength = images?.length * 10;
//     const workerProfileLength = navId[0]?.workerProfile?.length * 10 || 0;
//     const programLength = navId[0]?.program?.length * 10 || 0;

//     const counsel = onlineCounsel ? 50 : 10;

//     const rankScore =
//       (rank === "A" && 100) ||
//       (rank === "B" && 80) ||
//       (rank === "C" && 60) ||
//       (rank === "D" && 40) ||
//       (rank === "E" && 20) ||
//       ((rank === "none" || "new") && 0);

//     const result = Number(listThumbNailLength + counsel + rankScore + workerProfileLength + programLength) * 10;

//     return result;
//   };

//   const findSeq = await counters.findOneAndUpdate({ indexName: "list" }, { $inc: { seq: 1 } }, { new: true });

//   const { seq } = findSeq;
//   const id = createID(seq);

//   const createNoticeId = () => {
//     navId[2]?.notice?.map((item, key) => {
//       const imgId = Number(id);

//       item.noticeId = imgId + imgId + key;
//     });
//   };

//   createNoticeId();

//   const result = await Lists.insertMany({
//     id,
//     cateId,
//     area,
//     district,
//     title,
//     thumbNail,
//     address,
//     images: arr,
//     counselDetails,
//     phoneCounselCount,
//     rank,
//     establish,
//     watingPerson,
//     onlineCounsel,
//     navId,
//     recommendScore: saveRecommendScore(),
//   });

//   return res.send(result);
// });

module.exports = listRouter;
