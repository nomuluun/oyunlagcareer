import { useContext, useState } from "react";
import { CareerType, careerTestData } from "../../utils/data";
import { useRouter } from "next/router";
import { SidebarContext } from "@/context/DataContext";

// import  CareerType  from "@/utils/data";
export default function CareerTest() {
  const { result, setResult } = useContext(SidebarContext);
  // console.log('contextResult',result)
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
    "sm:text-xl lg:text-2xl p-[20px] bg-[#5E17EB] w-full max-w-[582px] text-[#fff] rounded-[100px] font-bold  hover:-translate-y-2 box-shad mb-8 lg:mb-11 transition-all";
  let answerBtn1, answerBtn2;
  if (choice[userIndex] == 1) {
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
    const newChoice = choice.map((data, index) => {
      if (index == userIndex) {
        return (data = 1);
      } else return data;
    });
    setChoise(newChoice);
    if (userIndex == 19) {
      setUserIndex(userIndex);
      choice[19] = 1;
      console.log(choice[userIndex]);
      for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 16; j++) {
          CareerType[j].score += careerTestData[i].score[choice[i] - 1][j];
        }
      }

      CareerType.sort(function (a, b) {
        return b.score - a.score;
      });
      for (let i = 0; i < 16; i++) {
        console.log(CareerType[i].nme + " " + CareerType[i].score + " ");
      }
      setResult(CareerType);
      localStorage.setItem("result", JSON.stringify(CareerType));

      router.push("/careerresult");
    } else {
      setUserIndex(userIndex + 1);
    }
  };
  const handleB = () => {
    console.log(userIndex);
    console.log("handleB");
    const newChoice = choice.map((data, index) => {
      if (index == userIndex) {
        return (data = 2);
      } else return data;
    });
    setChoise(newChoice);
    const newIndex = userIndex + 1;
    setUserIndex(newIndex);
    if (userIndex == 19) {
      setUserIndex(userIndex);
      choice[19] = 2;
      console.log(choice[userIndex]);
      for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 16; j++) {
          CareerType[j].score += careerTestData[i].score[choice[i] - 1][j];
        }
      }

      CareerType.sort(function (a, b) {
        return b.score - a.score;
      });
      for (let i = 0; i < 16; i++) {
        console.log(CareerType[i].nme + " " + CareerType[i].score + " ");
      }
      setResult(CareerType);
      localStorage.setItem("result", JSON.stringify(CareerType));
      router.push("/careerresult");
    } else {
      setUserIndex(userIndex + 1);
    }
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
      alert("Хариултаа сонгоно уу!");
    }
  };

  return (
    <div className="flex font flex-col justify-center items-center pt-20 bg-[#F5F5F5] w-full ">
      <div className=" w-full max-w-[1200px]  bg-[#f5f5f5]  flex flex-col  items-center px-5">
        <img
          src="/svg/Byc.png"
          className="absolute right-[6vw] bottom-[25vh] w-[20%] max-w-[278px] min-w-[195px] hidden lg:block "
        />
        <img
          src="/svg/pic2.png"
          className="absolute  right-0 top-[80px] hidden lg:block"
        />
        <div className="sm:text-md lg:text-2xl  flex flex-row justify-center font-bold text-har mb-8 lg:mb-11">
          {"Асуулт " + (userIndex + 1) + "/" + "20"}
        </div>

        <div className="text-xl sm:text-2xl lg:text-4xl flex justify-center items-center w-full max-w-[810px] text-center font-bold mb-8 mt-5 lg:mb-11 lg:mt-11">
          <p className="text-shad">{careerTestData[userIndex].que}</p>
        </div>
        <button className={answerBtn1} onClick={handleA}>
          {"A. " + careerTestData[userIndex].a1}
        </button>
        <button className={answerBtn2} onClick={handleB}>
          {"Б. " + careerTestData[userIndex].a2} 
        </button>
        <div className="flex flex-row justify-between w-full max-w-[800px] mt-4 lg:mt-11">
          <button
            className="text-base font-bold text-prp hover:text-[#FFBD59] "
            onClick={prev}
          >
            {userIndex == 0 ? "" : " Өмнөх"}
          </button>
          <button
            className="
                        text-base font-bold 
                        text-prp 
                        hover:text-[#FFBD59]"
            onClick={next}
          >
            {userIndex > 18 ? "" : "Дараах"}
          </button>
        </div>
      </div>
    </div>
  );
}
