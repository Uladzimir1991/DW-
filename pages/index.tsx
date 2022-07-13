import React from "react";
import {MainPageContainer} from "../src/features/mainpage/mainPage";

export default function Home({pageData}: any) {
    return (
      <>
        <MainPageContainer pageData={pageData} />
      </>
  )
}

export const getStaticProps = async () => {
    const pageData = {
        title: 'А вдруг СМА?',
        chooseTitle: 'Выберите, кто ваш пациент:',
        adult: 'Взрослый',
        adultItem1: 'Менее тяжелые формы СМА могут возникать и диагностироваться в зрелом возрасте.',
        adultItem2: 'По сравнению с СМА у детей, СМА у взрослых может иметь более легкие симптомы, но без патогенетической терапии пациенты со СМА 2-3 типа неуклонно теряют двигательные навыки.',
        adultItem3: 'По сравнению с СМА в детстве, течение СМА у взрослых может быть более коварным и трудным для распознавания.',
        baby: 'Ребёнок',
        babyItem1: 'Ребенок, плохо удерживающий голову, когда ему придают сидячее положение, с вялыми движениями нижних конечностей или с трудом тянущийся к предметам, но при этом с осмысленным и ярким взглядом, улыбающийся и социально активный, вызывает настороженность в отношении наличия СМА.',
        babyItem2: 'Младенцам со СМА необходимо экстренное направление к специалисту, ранняя диагностика и обеспечение терапией, спасающей жизнь, поскольку эти мотонейроны очень быстро подвергаются дегенерации при прогрессировании заболевания',
        infoTitle1: 'Сообщает ли один из ваших пациентов о следующих симптомах?',
        infoTitle2: ' (нажмите на любую иконку и узнайте больше)',
        adultCarouseItem1: 'Сколиоз',
        adultCarouseItem2: 'Ограниченная способность поднимать руки и переносить предметы',
        adultCarouseItem3: 'Нарушения жевания и глотания',
        adultCarouseItem4: 'Дыхательная недостаточность/ респираторная дисфункция',
        adultCarouseItem5: 'Неспособность бегать, изменение походки',
        adultCarouseItem6: 'Контрактура суставов',
        adultCarouseItem7: 'Вывих бедра',
        adultCarouseItem8: 'Утомляемость',
    }
    return {
        props: {
            pageData,
        },
    };
}