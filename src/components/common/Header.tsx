import React from "react";

import s from './header.module.scss';

import Stats from "./Stats";

import powerImg from '../../images/svg/power.svg';
import healthImg from '../../images/svg/health.svg';
import armorImg from '../../images/svg/armor.svg';
import agilityImg from '../../images/svg/agility.svg';
import manaImg from '../../images/svg/mana.svg';
import stealthImg from '../../images/svg/stealth.svg';
import luckImg from '../../images/svg/luck.svg';

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.header__stats}>
                <Stats image={powerImg} value={1000} />
                <Stats image={healthImg} value={1000} />
                <Stats image={armorImg} value={1000} />
                <Stats image={agilityImg} value={1000} />
                <Stats image={manaImg} value={1000} />
                <Stats image={stealthImg} value={1000} />
                <Stats image={luckImg} value={1000} />
            </div>
        </div>
    );
}

export default Header;