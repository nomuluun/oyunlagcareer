import { useState } from "react"
import { CareerType, careerTestData } from "../../utils/data";
import { useRouter } from "next/router";

// import  CareerType  from "@/utils/data";
export default function CareerTest(){
    const router = useRouter()
    console.log(careerTestData);
    const [userIndex, setUserIndex] = useState(0);
    const index = 0;
    const [choice, setChoise] = useState([
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]);
    let activeBtn = "text-2xl p-[20px] bg-[#FFBD59] w-[582px] text-[#fff] rounded-[100px] font-bold box-shad"
    let btnStyle = "text-2xl p-[20px] bg-[#5E17EB] w-[582px] text-[#fff] rounded-[100px] font-bold hover:bg-[#FFBD59] box-shad"
    let answerBtn1 ,answerBtn2 ;
    // console.log("choice", choice);
    // if (userIndex == 20) {
    //   console.log("done");
    //   for (let i = 0; i < 20; i++) {
    //     for (let j = 0; j < 16; j++) {
    //       CareerType[j].scre += careerTestData[i].score[choice[i] - 1][j];
    //     }
    //   }
    //   CareerType.sort(function (a, b) {
    //     return a.scre - b.scre;
    //   });
    //   for (let i = 0; i < 16; i++) {
    //     // console.log(CareerType[i].nme + " " + CareerType[i].scre + " ");
    //   }
    // }
    if (choice[userIndex] == 1) {
      // console.log();
      answerBtn1 = activeBtn;
      answerBtn2 = btnStyle;
    } else if (choice[userIndex] == 2) {
      answerBtn1 = btnStyle;
      answerBtn2 = activeBtn;
    } else {
      answerBtn1 = btnStyle;
      answerBtn2 = btnStyle;
    }
    const handleA = () => {
      console.log(userIndex);
      console.log("gandlA");
      if(userIndex == 19 ){
        router.push("/careerresult");
      }
      const newChoice = choice.map((data, index) => {
        if (index == userIndex) {
          return (data = 1);
        } else return data;
      });
      setChoise(newChoice);
    //   const newIndex = userIndex + 1;
      userIndex ==19 ? setUserIndex(userIndex): setUserIndex(userIndex  + 1)
      
    };
    const handleB = () => {
        console.log(userIndex);
        console.log("gandlA");
        if(userIndex == 19 ){
          router.push("/careerresult");
        }
      const newChoice = choice.map((data, index) => {
        if (index == userIndex) {
          return (data = 2);
        } else return data;
      });
      setChoise(newChoice);
      const newIndex = userIndex + 1;
      setUserIndex(newIndex);
    };
    const prev = () => {
        let newIndex=userIndex;
        if(userIndex!=0){
            newIndex -=1;
        }
        setUserIndex(newIndex);
    };
    const next = () => {
        let newIndex = userIndex;
        if (choice[userIndex] != 0) {
            if(userIndex==19){
                setUserIndex(newIndex);
            }
            else {
                setUserIndex(newIndex + 1);
            }
        } else {
            alert("hariultaa songono uu");
        }
    };
    
    return(
        <div className="flex justify-center items-center h-[100vh] bg-[#F5F5F5] ">
                <div className=" w-[1200px] h-[746px] bg-[#f5f5f5]   flex flex-col justify-between items-center relative" >
                    <img src="/svg/Byc.png" width={"278px"} className="absolute right-[32px] bottom-[124px]"/>
                    <img src="/svg/pic2.png" className="absolute  right-[-20px] top-[60px] "  />
                    <div className="w-full h-[70px] flex flex-col justify-between bo">
                        {/* <progress className="progress progress-[#5E17EB] w-full h-1 pt-0 rounded-[20px] " value={1} max="20" ></progress> */}
                        <div className="text-2xl  flex flex-row justify-center items-center font-bold text-[#373737]">
                            {"Асуулт "+ (userIndex + 1 )+ "/" + '20'}
                        </div>
                    </div>
                    <div className=" flex flex-col h-[400px] justify-between">
                        <div className="text-4xl flex justify-center items-center w-[810px] text-center font-bold " >
                            <p className="text-shad">{careerTestData[userIndex].que}</p>
                        </div>
                        <div className="flex flex-col h-[250px]  justify-around items-center ">
                            <button className={answerBtn1} onClick={handleA}>{"A. "+careerTestData[userIndex].a1}</button>
                            <button className={answerBtn2} onClick={handleB} >{"Б. "+careerTestData[userIndex].a2} </button>
                        </div>
                    </div>
                    <div className="] flex flex-row justify-between w-full" >
                        <button className="text-base font-bold text-[#5E17EB] hover:text-[#FFBD59] " onClick={prev}>Өмнөх</button>
                        <button 
                        className="
                        text-base font-bold 
                        text-[#5E17EB] 
                        hover:text-[#FFBD59]" 
                        onClick={next
                        }>
                            Дараах
                        </button>
                    </div>
                </div>
        </div>
    )
}