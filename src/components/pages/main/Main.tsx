import * as React from "react";

import s from './main.module.scss';

import Header from "../../common/Header";
import CityLocation from "./CityLocation";

import mainBg from '../../../images/camp-bg.jpg'
import campHome from '../../../images/camp-home.png';
import campAnvil from '../../../images/anvil.png';
import campShop from '../../../images/camp-shop.png';

const Main = () => {
    return (
        <>
            <div className={s.header}>
                <Header />
            </div>
            <div className="wrapper">
                <div className={`${s.main} container`}>
                    <img src={mainBg} alt="home" />
                    <a id={s.home} href="#">
                        <CityLocation image={campHome} name="Мій персонаж" />
                    </a>
                    <a id={s.anvil} href="#">
                        <CityLocation image={campAnvil} name="Кузня" />
                    </a>
                    <a id={s.shop} href="#">
                        <CityLocation image={campShop} name="Магазин" />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Main;