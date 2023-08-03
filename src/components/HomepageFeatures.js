import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '比邻',
    Svg: require('../../static/img/tree.svg').default,
    description: (
      <>
        《梧桐影·落日斜》<br></br>
        <code>唐 · 吕岩</code><br></br>
        落日斜 ， 秋风冷 。<br></br>
        今夜故人来不来 ， 教人立尽梧桐影 。
      </>
    ),
  },
  {
    title: '妙笔生花',
    Svg: require('../../static/img/juhua.svg').default,
    description: (
      <>
        《文章》<br></br>
        <code>宋代 · 陆游</code><br></br>
        文章本天成，妙手偶得之。<br></br>粹然无疵瑕，岂复须人为？<br></br>
        君看古彝器，巧拙两无施。<br></br>汉最近先秦，固已殊淳漓。<br></br>
        胡部何为者，豪竹杂哀丝。<br></br>后夔不复作，千载谁与期？<br></br>
      </>
    ),
  },
  {
    title: '逝水流年',
    Svg: require('../../static/img/boke.svg').default,
    description: (
      <>
       《春江花月夜》<br></br>
        <code>唐 · 张若虚</code><br></br>
        春江潮水连海平，海上明月共潮生。<br></br>

        滟滟随波千万里，何处春江无月明！<br></br>

        江流宛转绕芳甸，月照花林皆似霰；<br></br>

        空里流霜不觉飞，汀上白沙看不见。<br></br>

        江天一色无纤尘，皎皎空中孤月轮。<br></br>

        江畔何人初见月？江月何年初照人？<br></br>

        人生代代无穷已，江月年年望相似。<br></br>

        不知江月待何人，但见长江送流水。<br></br>

        白云一片去悠悠，青枫浦上不胜愁。<br></br>

        谁家今夜扁舟子？何处相思明月楼？<br></br>

        可怜楼上月裴回，应照离人妆镜台。<br></br>

        玉户帘中卷不去，捣衣砧上拂还来。<br></br>

        此时相望不相闻，愿逐月华流照君。<br></br>

        鸿雁长飞光不度，鱼龙潜跃水成文。<br></br>

        昨夜闲潭梦落花，可怜春半不还家。<br></br>

        江水流春去欲尽，江潭落月复西斜。<br></br>

        斜月沉沉藏海雾，碣石潇湘无限路。<br></br>

        不知乘月几人归，落月摇情满江树。<br></br>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
