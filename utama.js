import React from 'react';
import {Switch,Route} from 'react-router-dom';

import Beranda from './beranda';
import Kontak from './kontak';
import Tentangsaya from './tentangsaya';
import Karya from './karya';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/tentangsaya" component={Tentangsaya} />
        <Route path="/karya" component={Karya} />
        <Route path="/kontak" component={Kontak} />
    </Switch>
)

export default Utama;
