import { useState } from "react";
import { CareerType, careerTestData } from "../../utils/data";
import { useRouter } from "next/router";

// import  CareerType  from "@/utils/data";
export default function CareerTest() {
  const router = useRouter();
  console.log(careerTestData);
  const [userIndex, setUserIndex] = useState(0);
  const index = 0;
  const [choice, setChoise] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  let activeBtn =
    "sm:text-xl lg:text-2xl p-[20px] bg-[#FFBD59] w-full max-w-[582px] text-[#fff] rounded-[100px] font-bold box-shad mb-8 lg:mb-11";
  let btnStyle =
    "sm:text-xl lg:text-2xl p-[20px] bg-prp w-full max-w-[582px] text-[#fff] rounded-[100px] font-bold hover:bg-[#FFBD59] box-shad mb-8 lg:mb-11";
  let answerBtn1, answerBtn2;
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
    if (userIndex == 19) {
      router.push("/careerresult");
    }
    const newChoice = choice.map((data, index) => {
      if (index == userIndex) {
        return (data = 1);
      } else return data;
    });
    setChoise(newChoice);
    //   const newIndex = userIndex + 1;
    userIndex == 19 ? setUserIndex(userIndex) : setUserIndex(userIndex + 1);
  };
  const handleB = () => {
    console.log(userIndex);
    console.log("gandlA");
    if (userIndex == 19) {
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
    let newIndex = userIndex;
    if (userIndex != 0) {
      newIndex -= 1;
    }
    setUserIndex(newIndex);
  };
  const next = () => {
    let newIndex = userIndex;
    if (choice[userIndex] != 0) {
      if (userIndex == 19) {
        setUserIndex(newIndex);
      } else {
        setUserIndex(newIndex + 1);
      }
    } else {
      alert("hariultaa songono uu");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-[100vh] bg-[#F5F5F5] w-[100%] border">
      <div className=" w-[100%] max-w-[1200px]  bg-[#f5f5f5]   flex flex-col  items-center px-5">
        <img
          src="/svg/Byc.png"
          className="absolute right-[1vw] bottom-[7vw] w-[20%] max-w-[278px] min-w-[195px] hidden lg:block "
        />
        <img
          src="/svg/pic2.png"
          className="absolute  right-0 top-[80px] hidden lg:block"
        />
        <div className="sm:text-md lg:text-2xl  flex flex-row justify-center font-bold text-har mb-8 lg:mb-11">
          {"Асуулт " + (userIndex + 1) + "/" + "20"}
        </div>

        <div className="text-xl sm:text-2xl lg:text-4xl flex justify-center items-center w-full max-w-[810px] text-center font-bold mb-8 mt-8 lg:mb-11 lg:mt-11">
          <p className="text-shad">{careerTestData[userIndex].que}</p>
        </div>
        <button className={answerBtn1} onClick={handleA}>
          {"A. " + careerTestData[userIndex].a1}
        </button>
        <button className={answerBtn2} onClick={handleB}>
          {"Б. " + careerTestData[userIndex].a2} 
        </button>
        <div className="flex flex-row justify-between w-full max-w-[800px] mt-8 lg:mt-11">
          <button
            className="text-base font-bold text-prp hover:text-[#FFBD59] "
            onClick={prev}
          >
            Өмнөх
          </button>
          <button
            className="
                        text-base font-bold 
                        text-prp 
                        hover:text-[#FFBD59]"
            onClick={next}
          >
            Дараах
          </button>
        </div>
      </div>
    </div>
  );
}
