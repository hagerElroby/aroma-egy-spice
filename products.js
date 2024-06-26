const products = [
    {
        id: 1,
        title: "Parsley",
        packing: "PP bags , Paper Bags & Carton Boxes",
        netWeight: "20 kg",
        availableForms: "dried leaves , Crushed ",
        FTFCL20:"6 MT",
        FTFCL40:"12 MT",
        image: "parsley.jpg",
        type:"herbs"
    },
    {
        id: 2,
        title: "Basil",
        packing: "PP bags , Paper Bags & Carton Boxes",
        netWeight: "20 kg",
        availableForms: "Dried Crushed leaves",
        FTFCL20:"6 MT",
        FTFCL40:"12 MT",
        image: "basil.jpg",
        type:"herbs"
    },
    {
        id: 3,
        title: "Thyme",
        packing: "PP bags , Paper Bags & Carton Boxes",
        netWeight: "20 kg",
        availableForms: "dried leaves , Crushed ",
        FTFCL20:"7 MT",
        FTFCL40:"14 MT",
        image: "thyme.jpg",
        type:"herbs"
    },
    {
        id: 4,
        title: "Marjoram",
        packing: "PP bags , Paper Bags & Carton Boxes",
        netWeight: "20 kg",
        availableForms: "Dried Crushed leaves",
        FTFCL20:"6 MT",
        FTFCL40:"12 MT",
        image: "marjoram.jpg",
        type:"herbs"
    },
    {
        id: 5,
        title: "Spearmint",
        packing: "PP bags , Paper Bags & Carton Boxes",
        netWeight: "20 kg",
        availableForms: "Dried Crushed leaves",
        FTFCL20:"6 MT",
        FTFCL40:"12 MT",
        image: "spearmint.jpeg",
        type:"herbs"
    },
    {
        id: 6,
        title: "Peppermint",
        packing: "PP bags , Paper Bags & Carton Boxes",
        netWeight: "20 kg",
        availableForms: "Dried Crushed leaves",
        FTFCL20:"6 MT",
        FTFCL40:"12 MT",
        image: "peppermint.jpg",
        type:"herbs"
    },
    {
        id: 7,
        title: "Moringa",
        packing: "PP bags , Paper Bags & Carton Boxes",
        netWeight: "20 kg",
        availableForms: "Dried Crushed leaves",
        FTFCL20:"6 MT",
        FTFCL40:"12 MT",
        image: "moringa.jpg",
        type:"herbs"
    },
    {
        id: 8,
        title: "Melissa",
        packing: "PP bags , Paper Bags & Carton Boxes",
        netWeight: "20 kg",
        availableForms: "Dried Crushed leaves",
        FTFCL20:"6 MT",
        FTFCL40:"12 MT",
        image: "melissa.jpg",
        type:"herbs"
    },
    {
        id: 9,
        title: "Mulukhiyah",
        packing: "PP bags , Paper Bags & Carton Boxes",
        netWeight: "5 kg",
        availableForms: "Whole & Crushed",
        FTFCL20:"1.75 MT",
        FTFCL40:"3.5 MT",
        image: "mulukhiyah.jpg",
        type:"herbs"
    },
    {
        id: 10,
        title: "Dill",
        packing: "PP bags , Paper Bags & Carton Boxes",
        netWeight: "20 kg",
        availableForms: "Dried leaves",
        FTFCL20:"6 MT",
        FTFCL40:"12 MT",
        image: "dill.jpg",
        type:"herbs"
    },
    {
        id: 11,
        title: "Coriander leaves",
        packing: "PP bags , Paper Bags & Carton Boxes",
        netWeight: "20 kg",
        availableForms: "Dried Crushed leaves",
        FTFCL20:"6 MT",
        FTFCL40:"12 MT",
        type: "herbs",
        image:"coriander.jpg"
    },
    {
        id: 12,
        title: "Fennel seeds",
        packing: "PP bags , Paper Bags",
        netWeight: "25 kg",
        availableForms: "Seeds",
        FTFCL20:"12 MT",
        FTFCL40:"25 MT",
        type: "seeds",
        image:"fennelseeds.jpg"
    },
    {
        id: 13,
        title: "Caraway seeds",
        packing: "PP bags , Paper Bags",
        netWeight: "25 kg",
        availableForms: "Seeds",
        FTFCL20:"12 MT",
        FTFCL40:"25 MT",
        type: "seeds",
        image:"carawayseeds.jpg"
    },
    {
        id: 14,
        title: "Anise seeds",
        packing: "PP bags , Paper Bags",
        netWeight: "25 kg",
        availableForms: "Seeds",
        FTFCL20:"12 MT",
        FTFCL40:"25 MT",
        type: "seeds",
        image:"aniseseeds.jpg"
    },
    {
        id: 15,
        title: "Fenugreek seeds",
        packing: "PP bags , Paper Bags",
        netWeight: "25 kg",
        availableForms: "Seeds",
        FTFCL20:"12 MT",
        FTFCL40:"25 MT",
        type: "seeds",
        image:"fenugreekseeds.jpg"
    },
    {
        id: 16,
        title: "Dill seeds",
        packing: "PP bags , Paper Bags",
        netWeight: "25 kg",
        availableForms: "Seeds",
        FTFCL20:"12 MT",
        FTFCL40:"25 MT",
        type: "seeds",
        image:"dillseeds.jpg"
    },
    {
        id: 17,
        title: "Parsley seeds",
        packing: "PP bags , Paper Bags",
        netWeight: "25 kg",
        availableForms: "Seeds",
        FTFCL20:"12 MT",
        FTFCL40:"25 MT",
        type: "seeds",
        image:"parsleyseeds.jpg"
    },
    {
        id: 18,
        title: "Basil seeds",
        packing: "PP bags , Paper Bags",
        netWeight: "25 kg",
        availableForms: "Seeds",
        FTFCL20:"12 MT",
        FTFCL40:"25 MT",
        type: "seeds",
        image:"basilseeds.jpg"
    },
    {
        id: 19,
        title: "Nigella Sativa",
        packing: "PP bags , Paper Bags",
        netWeight: "25 kg",
        availableForms: "Seeds",
        FTFCL20:"12 MT",
        FTFCL40:"25 MT",
        type: "seeds",
        image:"nigellasativa.jpg"
    },
    {
        id:20,
        title: "Linseeds",
        packing: "PP bags , Paper Bags",
        netWeight: "25 kg",
        availableForms: "Seeds",
        FTFCL20:"12 MT",
        FTFCL40:"25 MT",
        type: "seeds",
        image:"linseeds.jpg"
    },
    {
        id: 21,
        title: "Celery seeds",
        packing: "PP bags , Paper Bags",
        netWeight: "25 kg",
        availableForms: "Seeds",
        FTFCL20:"12 MT",
        FTFCL40:"25 MT",
        type: "seeds",
        image:"celeryseeds.jpg"
    },
    {
        id: 22,
        title: "Radish seeds",
        packing: "PP bags , Paper Bags",
        netWeight: "25 kg",
        availableForms: "Seeds",
        FTFCL20:"12 MT",
        FTFCL40:"25 MT",
        type: "seeds",
        image:"radishseeds.jpg"
    },
    {
        id: 23,
        title: "Dry Yellow Lemon",
        packing: "PP bags , Paper Bags",
        netWeight: "20 kg",
        availableForms: "Whole – Crushed – Powder",
        FTFCL20:"4 MT",
        FTFCL40:"8 MT",
        type: "spices",
        image:"dryyellowlemon.jpg"
    },
    {
        id: 24,
        title: "Dry Black Lemon",
        packing: "PP bags , Paper Bags",
        netWeight: "20 kg",
        availableForms: "Whole – Crushed – Powder",
        FTFCL20:"4 MT",
        FTFCL40:"8 MT",
        type: "spices",
        image:"dryblacklemon.jpg"
    },
     {
        id: 25,
        title: "Bay leaf",
        packing: " PP bags , Paper Bags & Carton Boxes",
        netWeight: "10 kg",
        availableForms: "whole leaves – powder",
        FTFCL20:"4 MT",
        FTFCL40:"8 MT",
        type: "spices",
        image:"bayleaf.jpeg"
    },
     {
        id: 26,
        title: "Oregano",
        packing: "PP bags , Paper Bags & Carton Boxes",
        netWeight: "20 kg",
        availableForms: "dried leaves , Crushed ",
        FTFCL20:"6 MT",
        FTFCL40:"12 MT",
        type: "spices",
        image:"oregano.jpeg"
    },
     {
        id: 27,
        title: "Rosemary",
        packing: "PP bags , Paper Bags & Carton Boxes",
        netWeight: "20 kg",
        availableForms: "dried leaves , Crushed ",
        FTFCL20:"6 MT",
        FTFCL40:"12 MT",
        type: "spices",
        image:"rosemary.jpg"
    },
     {
        id: 28,
        title: "Hot Chili",
        packing: "PP bags , Paper Bags & Carton Boxes",
        netWeight: "20 kg",
        availableForms: " Whole – crushed-powder ",
        FTFCL20:"3.5 MT",
        FTFCL40:"7 MT",
        type: "spices",
        image:"hotchili.jpg"
    },
     {
        id: 29,
        title: "Paprika",
        packing: "PP bags , Paper Bags",
        netWeight: "25 kg",
        availableForms: " powder form ",
        FTFCL20:"12 MT",
        FTFCL40:"25 MT",
        type: "spices",
        image:"paprika.jpg"
    },
     {
        id: 30,
        title: "Coriander seeds",
        packing: "PP bags , Paper Bags",
        netWeight: "25 kg",
        availableForms: "seeds",
        FTFCL20:"12 MT",
        FTFCL40:"25 MT",
        type: "spices",
        image:"corianderseeds.jpg"
    },

];

