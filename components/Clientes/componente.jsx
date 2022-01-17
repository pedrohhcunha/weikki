import styles from './styles.module.scss';
import Image from 'next/image'

import aurora from './images/aurora.png'
import castilhoCia from './images/castilhoCia.png'
import cordenonsi from './images/cordenonsi.png'
import corpedia from './images/corpedia.png'
import doripel from './images/doripel.png'
import ka from './images/ka.png'
import nexen from './images/nexen.png'
import tozzo from './images/tozzo.png'
import patrimonial from './images/patrimonial.png'
import questor from './images/questor.png'
import santaMaria from './images/santaMaria.png'
import saoRafael from './images/saoRafael.png'
import schumann from './images/schumann.png'
import semil from './images/semil.png'
import sesi from './images/sesi.png'
import sicoob from './images/sicoob.png'
import tagia from './images/tagia.png'
import tremea from './images/tremea.png'
import uceff from './images/uceff.png'
import unimed from './images/unimed.png'
import zoetis from './images/zoetis.png'

export default function Clientes (props){
    return(
        <section className={styles.section}>
            <h2>Quem confia na gente</h2>
            <h3>Mais de 400 empresas já confiaram na Weikki.</h3>
            <div className={styles.clientes}>
                <Image className={styles.cliente} src={aurora} layout="responsive" />
                <Image className={styles.cliente} src={castilhoCia} layout="responsive" />
                <Image className={styles.cliente} src={cordenonsi} layout="responsive" />
                <Image className={styles.cliente} src={corpedia} layout="responsive" />
                <Image className={styles.cliente} src={doripel} layout="responsive" />
                <Image className={styles.cliente} src={ka} layout="responsive" />
                <Image className={styles.cliente} src={nexen} layout="responsive" />
                <Image className={styles.cliente} src={tozzo} layout="responsive" />
                <Image className={styles.cliente} src={patrimonial} layout="responsive" />
                <Image className={styles.cliente} src={questor} layout="responsive" />
                <Image className={styles.cliente} src={santaMaria} layout="responsive" />
                <Image className={styles.cliente} src={saoRafael} layout="responsive" />
                <Image className={styles.cliente} src={schumann} layout="responsive" />
                <Image className={styles.cliente} src={semil} layout="responsive" />
                <Image className={styles.cliente} src={sesi} layout="responsive" />
                <Image className={styles.cliente} src={sicoob} layout="responsive" />
                <Image className={styles.cliente} src={tagia} layout="responsive" />
                <Image className={styles.cliente} src={tremea} layout="responsive" />
                <Image className={styles.cliente} src={uceff} layout="responsive" />
                <Image className={styles.cliente} src={unimed} layout="responsive" />
                <Image className={styles.cliente} src={zoetis} layout="responsive" />
            </div>
        </section>
    )
}