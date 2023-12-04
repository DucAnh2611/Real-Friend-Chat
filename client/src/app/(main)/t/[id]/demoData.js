export const listName = ["Duc anh", "Nga", "Manh", "Dung", "Nguyen"];
const listAva = [
    "https://res.cloudinary.com/dxdmbosbl/image/upload/v1688184263/postPhoto/f4zwckkvh5c0oyc8cvs1.jpg",
    "https://res.cloudinary.com/dxdmbosbl/image/upload/v1688180042/postPhoto/xtai4ixrccielzkqh7lk.jpg",
    "https://res.cloudinary.com/dxdmbosbl/image/upload/v1686968986/postPhoto/hlbex8rptff9ih9yeofh.jpg",
    "https://res.cloudinary.com/dxdmbosbl/image/upload/v1686967683/postPhoto/qucarutdd9cxwikttmlg.jpg",
    "https://res.cloudinary.com/dxdmbosbl/image/upload/v1687567228/postPhoto/xedrr69hmxtijqe0pzmi.jpg",
];

const longText = "@everyone Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu";

const shortText= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const tinyText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
const RandomContent = (text) => {
    let ran = Math.random();
    if(ran < 0.2) return longText;
    else if(ran < 0.5) return shortText;
    else if(ran < 0.9) return tinyText;
    else return text;
}

function generateRandomDate(from, to) {
    return new Date(
      from.getTime() +
        Math.random() * (to.getTime() - from.getTime()),
    );
}

const randomSeen = () => {
    let arr = new Array(Math.ceil(Math.random()*listName.length)).fill({});
    arr = arr.map((e, id) => (
        {   
            id: id,
            name: listName[Math.floor(Math.random()*listName.length)],
            avatar: listAva[Math.floor(Math.random()*listAva.length)] , 
            seen_at: generateRandomDate(new Date(2023, 9, 1), new Date())
        }));
    return arr;
}

export const theme = {
    primaryColor: "green-500",
    secondaryColor: "grey-400",
    keyboardBorder: "green-500",
    keyboardBackground: "grey-500",
    primaryMention: "orange-500",
    secondaryMention: "white",
    primaryText: "grey-500",
    secondaryText: "white",
    timeColor: "grey-200",
    nicknameColor: "white",
    background: "transparent"
};


export const demoData = [
    {
        id: 1,  
        content: "https://res.cloudinary.com/dxdmbosbl/image/upload/v1688184324/postPhoto/ay3ad36ew3dzt69ao4mq.jpg", 
        userid: 1,
        nickname: listName[Math.floor(Math.random()*listName.length)],
        avatar: listAva[Math.floor(Math.random()*listAva.length)] , 
        type: 2, 
        deleted: Math.random() < 0.2 ? 1: 0, 
        pin: Math.random() < 0.1 ? 1: 0  , 
        send: generateRandomDate(new Date(2023, 9, 1), new Date()),
        seen: randomSeen()
    },
    {
        id: 2,  
        content: RandomContent("This is text "), 
        userid: 2,
        nickname: listName[Math.floor(Math.random()*listName.length)],
        avatar: listAva[Math.floor(Math.random()*listAva.length)] , 
        type: 1, 
        deleted: Math.random() < 0.2 ? 1: 0, 
        pin: Math.random() < 0.1 ? 1: 0  , 
        send: generateRandomDate(new Date(2023, 9, 1), new Date()),
        seen: randomSeen()
    },
    {
        id: 3,  
        content: RandomContent("This is text "), 
        userid: 3,
        nickname: listName[Math.floor(Math.random()*listName.length)],
        avatar: listAva[Math.floor(Math.random()*listAva.length)] , 
        type: 1, 
        deleted: Math.random() < 0.2 ? 1: 0, 
        pin: Math.random() < 0.1 ? 1: 0  , 
        send: generateRandomDate(new Date(2023, 9, 1), new Date()),
        seen: randomSeen()
    },
    {
        id: 4,  
        content: "https://res.cloudinary.com/dxdmbosbl/image/upload/v1688184324/postPhoto/ay3ad36ew3dzt69ao4mq.jpg", 
        userid: 2,
        nickname: listName[Math.floor(Math.random()*listName.length)],
        avatar: listAva[Math.floor(Math.random()*listAva.length)] , 
        type: 2, 
        deleted: Math.random() < 0.2 ? 1: 0, 
        pin: Math.random() < 0.1 ? 1: 0  , 
        send: generateRandomDate(new Date(2023, 9, 1), new Date()),
        seen: randomSeen() 
    },
    {
        id: 5,  
        content: RandomContent("Send from me"), 
        userid: 4,
        nickname: listName[Math.floor(Math.random()*listName.length)],
        avatar: listAva[Math.floor(Math.random()*listAva.length)] , 
        type: 1, 
        deleted: Math.random() < 0.2 ? 1: 0, 
        pin: Math.random() < 0.1 ? 1: 0  , 
        send: generateRandomDate(new Date(2023, 9, 1), new Date()),
        seen: randomSeen() 
    },
    {
        id: 6,  
        content: RandomContent("Send With love"), 
        userid: 1,
        nickname: listName[Math.floor(Math.random()*listName.length)],
        avatar: listAva[Math.floor(Math.random()*listAva.length)] , 
        type: 1, 
        deleted: Math.random() < 0.2 ? 1: 0, 
        pin: Math.random() < 0.1 ? 1: 0  , 
        send: generateRandomDate(new Date(2023, 9, 1), new Date()),
        seen: randomSeen() 
    },
    {
        id: 7,  
        content: RandomContent("Send With love"), 
        userid: 3,
        nickname: listName[Math.floor(Math.random()*listName.length)],
        avatar: listAva[Math.floor(Math.random()*listAva.length)] , 
        type: 1, 
        deleted: Math.random() < 0.2 ? 1: 0, 
        pin: Math.random() < 0.1 ? 1: 0  , 
        send: generateRandomDate(new Date(2023, 9, 1), new Date()),
        seen: randomSeen()
    },
    {
        id: 8,  
        content: "https://res.cloudinary.com/dxdmbosbl/image/upload/v1688184324/postPhoto/ay3ad36ew3dzt69ao4mq.jpg", 
        userid: 3,
        nickname: listName[Math.floor(Math.random()*listName.length)],
        avatar: listAva[Math.floor(Math.random()*listAva.length)] , 
        type: 2, 
        deleted: 1, 
        pin: Math.random() < 0.1 ? 1: 0  , 
        send: generateRandomDate(new Date(2023, 9, 1), new Date()),
        seen: randomSeen()
    },
    {
        id: 9,  
        content: RandomContent("Send With love"), 
        userid: 2,
        nickname: listName[Math.floor(Math.random()*listName.length)],
        avatar: listAva[Math.floor(Math.random()*listAva.length)] , 
        type: 1, 
        deleted: Math.random() < 0.2 ? 1: 0, 
        pin: Math.random() < 0.1 ? 1: 0  , 
        send: generateRandomDate(new Date(2023, 9, 1), new Date()),
        seen: randomSeen()
    },
    {
        id: 10,  
        content: "https://res.cloudinary.com/dxdmbosbl/image/upload/v1688184324/postPhoto/ay3ad36ew3dzt69ao4mq.jpg", 
        userid: 2,
        nickname: listName[Math.floor(Math.random()*listName.length)],
        avatar: listAva[Math.floor(Math.random()*listAva.length)] , 
        type: 2, 
        deleted: Math.random() < 0.2 ? 1: 0, 
        pin: Math.random() < 0.1 ? 1: 0  , 
        send: generateRandomDate(new Date(2023, 9, 1), new Date()),
        seen: randomSeen()
    },

];