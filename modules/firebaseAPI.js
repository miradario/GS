import * as firebase from "firebase";

//import react in our code.

import i18n from "i18n-js";

// export const firebaseDatabase = firebase.database()
i18n.locale = "EN";

export const getUser = async () => {
  const database = firebase.database();
  const userId = firebase.auth().currentUser.uid;
  const source = database.ref("/Users/" + userId);

  const result = await source.once("value");
  return result.val();
};

export const getMeditation = async (category, meditationID) => {
  const database = firebase.database();
  const lang = i18n.locale.toUpperCase();
  console.log("getmeditation");
  console.log(meditationID);

  const source = database.ref("/Assets/EN/" + category + "/" + meditationID);
  const result = await source.once("value");
  return result.val();
};

export const getContent = async (category, filtersky) => {
  const database = firebase.database();
  const lang = i18n.locale.toUpperCase();
  const source = database.ref("/Assets/EN/" + category);
  const result = await source.once("value");
  const resources = [];
  result.forEach((data) => {
    let resource = data.val();

    const { Sky } = resource;
    console.log("filter" + filtersky);
    console.log("Sky" + Sky);
    if (filtersky && Sky) {
      null;
    } else {
      resource.id = data.key;
      resources.push(resource);
    }
  });
  return resources;
};

export const getFavourites = async () => {
  const database = firebase.database();
  const userId = firebase.auth().currentUser.uid;
  const source = database.ref("/Users/" + userId + "/Fav");
  const result = await source.once("value");
  const favs = [];
  result.forEach((data) => {
    let fav = data.val();
    fav.id = data.key;
    favs.push(fav);
  });
  return favs;
};

export const getFavsContent = async () => {
  const database = firebase.database();
  let favs = await getFavouritesID();
  const source = database.ref("/Assets/" + i18n.locale.toUpperCase());
  const result = await source.once("value");
  const favsContent = [];
  result.forEach((data) => {
    if (data.key != "List") {
      data.forEach((item) => {
        if (favs.includes(item.key)) {
          let favItem = item.val();
          favItem.id = item.key;
          favsContent.push(favItem);
        }
      });
    }
  });
  return favsContent;
};

export const getDownloadsContent = async () => {
  const database = firebase.database();
  let downloads = await getDownloadsID();
  const source = database.ref("/Assets/" + i18n.locale.toUpperCase());
  const result = await source.once("value");
  const downloadsContent = [];
  result.forEach((data) => {
    if (data.key != "List") {
      data.forEach((item) => {
        if (downloads.includes(item.key)) {
          let downloadItem = item.val();
          downloadItem.id = item.key;
          downloadsContent.push(downloadItem);
        }
      });
    }
  });
  await storeJsonLocally("downloadsContent", downloadsContent);
  return downloadsContent;
};

export const getRecommendedContent = async (category) => {
  const database = firebase.database();
  const lang = i18n.locale.toUpperCase();
  const source = database.ref("/RecommendAssets/" + lang + "/" + category);
  const result = await source.once("value");
  const resources = [];
  result.forEach((data) => {
    let resource = data.val();
    resource.id = data.key;
    resources.push(resource);
  });
  return resources;
};

export const getFavouritesID = async () => {
  const database = firebase.database();
  const userId = firebase.auth().currentUser.uid;
  const source = database.ref("/Users/" + userId + "/Fav");
  const result = await source.once("value");
  const favs = [];
  result.forEach((data) => {
    favs.push(data.key);
  });
  return favs;
};

export const getDownloadsID = async () => {
  const database = firebase.database();
  const userId = firebase.auth().currentUser.uid;
  const source = database.ref("/Users/" + userId + "/Downloads");
  const result = await source.once("value");
  const downloads = [];
  result.forEach((data) => {
    downloads.push(data.key);
  });
  return downloads;
};

export const checkDownload = async (elemID) => {
  const database = firebase.database();
  const userId = firebase.auth().currentUser.uid;
  const source = database.ref("/Users/" + userId + "/Downloads/" + elemID);
  const result = await source.once("value");
  return result.exists();
};

export const checkFav = async (elemID) => {
  const database = firebase.database();
  const userId = firebase.auth().currentUser.uid;
  const source = database.ref("/Users/" + userId + "/Fav/" + elemID);
  const result = await source.once("value");
  return result.exists();
};

export const addFav = async (key, type, category) => {
  const database = firebase.database();
  const userId = firebase.auth().currentUser.uid;
  const source = database.ref("/Users/" + userId + "/Fav");
  const newFav = await source.child(key).set({
    cat: category,
    type: type,
  });
  return newFav;
};

export const removeFav = async (key) => {
  const database = firebase.database();
  const userId = firebase.auth().currentUser.uid;
  const source = database.ref("/Users/" + userId + "/Fav/" + key);
  const remove = await source.remove();
  return remove;
};

export const removeDownload = async (key) => {
  const database = firebase.database();
  const userId = firebase.auth().currentUser.uid;
  const source = database.ref("/Users/" + userId + "/Downloads/" + key);
  const remove = await source.remove();
  return remove;
};
