import React from 'react'
import style from './ItemsHolder.module.css'
import { Image } from '../Items/image'
import { Title } from '../Items/title'

import { LastUpdate } from '../Items/lastUpdate'
import { TeacherAndPriceHolder } from '../Items/Teacher&PriceHolder/TeacherAndPriceHolder'
import { LevelAndCategoryHolder } from '../Items/level&CategoryHolder/LevelAndCategoryHolder'
import { DislikeAndLikeHolder } from '../Items/dislike&Like/dislike&likeHolder'
import { identifier } from '../../../../../../../../core/services/Functions/ThemeIdentifier';
const CoursesItemsHolderView2 = ({image, id, title, teacher, price, level, category, likeCount, dissLikeCount, classRoomName, currentRegistrants, lastUpdate}) => {

  return (
    <div className={style.holder} data-theme={identifier("darkCoursesHolder","dark2CoursesHolder","greenCoursesHolder","pinkCoursesHolder","blueCoursesHolder","redCoursesHolder")}>
        <Image id={id} image={image} />
        <div className={style.titleAndTeacherHolder}>
          <Title title={title} />
          <div className={style.DetailListCards}>
            <TeacherAndPriceHolder teacher={teacher} price={price} />
            <DislikeAndLikeHolder like={likeCount} dissLikeCount={dissLikeCount}/>
            <LastUpdate lastUpdate={lastUpdate}/> 
          </div>
        </div>
        <LevelAndCategoryHolder level={level} category={category} />
    </div>
  )
}

export {CoursesItemsHolderView2}