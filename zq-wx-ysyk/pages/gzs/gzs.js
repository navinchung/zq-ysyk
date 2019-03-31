Page({
      data: {
        scrollHeight:500,
        title:'国家税务总局肇庆市税务局落实减税降费政策一次性告知书',
        htmlText: `<p>
        <span><span> </span></span><span><span> </span></span><span><span> </span></span><span><span> </span></span> 
      </p>
      <p>
        <span><span><span>尊敬的纳税人：</span></span></span> 
      </p>
      <p>
        <span><span><br />
      <span><span></span></span></span></span> 
      </p>
      <div>
        <p>
          <span><span><span>&nbsp;&nbsp;&nbsp; 为更好地落实党中央、国务院关于减税降费决策部署，切实保障您的合法权益，确保税务机关依法行政，现将相关事项告知如下：</span></span></span>
        </p>
        <p>
          <span><span><span><span></span></span><span><br />
      </span></span></span> 
        </p>
      </div>
      <div>
        <span><span><span>&nbsp;&nbsp;&nbsp; 一、如果您属于增值税小规模纳税人，可享受以下税费优惠政策：<span></span></span></span></span> 
      </div>
      <p style="text-indent:24.0pt;">
        <span><span><span>（一）减按<span>50%</span>征收资源税、城市维护建设税、房产税、城镇土地使用税、印花税、耕地占用税和教育费附加、地方教育附加。<span></span></span></span></span> 
      </p>
      <p style="text-indent:24.0pt;">
        <span><span><span>（二）<span>月销售额未超过<span>10</span>万元（以<span>1</span>个季度为<span>1</span>个纳税期的，季度销售额未超过<span>30</span>万元，下同）的，免征增值税。月销售额超过<span>10</span>万元，但扣除不动产销售额后未超过<span>10</span>万元的，不动产销售额照章纳税，其他销售额免征增值税。适用增值税差额征税政策的，以差额后的销售额确定是否免征增值税。按期纳税的可以选择以<span>1</span>个月或<span>1</span>个季度为纳税期限，一经选择，一个会计年度内不得变更。</span></span></span></span>
      </p>
      <p style="text-indent:24.0pt;">
        <br />
      <span><span><span><span><span></span></span></span></span></span> 
      </p>
      <span><span><span>&nbsp;&nbsp;&nbsp; 二、如果您属于</span><span>从事国家非限制和禁止行业的<span>企业纳税人，<span>2019</span>年（税款所属期）截至季末平均值的从业人数不超过<span>300</span>人、资产总额不超过<span>5000</span>万元，且季度累计应纳税所得额不超过<span>300</span>万元、则可享受小型微利企业所得税优惠政策：<span></span></span></span></span></span> 
      <p style="text-indent:24.0pt;">
        <span><span><span>（一）年（含季度累计）应纳税所得额不超过<span>100</span>万元的部分，减按<span>25%</span>计入应纳税所得额，按<span>20%</span>的税率缴纳企业所得税（实际税负仅为<span>5%</span>）；<span></span></span></span></span> 
      </p>
      <p style="text-indent:24.0pt;">
        <span><span><span>（二）年（含季度累计）应纳税所得额超过<span>100</span>万元但不超过<span>300</span>万元的部分，减按<span>50%</span>计入应纳税所得额，按<span>20%</span>的税率缴纳企业所得税（实际税负仅为<span>10%</span>）。</span></span></span>
      </p>
      <p style="text-indent:24.0pt;">
        <br />
      <span><span><span><span></span></span></span></span> 
      </p>
      <div>
        <p>
          <span><span><span>&nbsp;&nbsp;&nbsp; 三、对初创科技型企业条件中的“从业人数”调整为不超过<span>300</span>人，“资产总额和年销售收入”调整为均不超过<span>5000</span>万元。<span></span></span><span>&nbsp;&nbsp;&nbsp; <br />
      </span></span></span>
        </p>
        <p>
          <span><span><span><br />
      </span></span></span> 
        </p>
      </div>
      <div>
        <p>
          <span><span><span>&nbsp;&nbsp;&nbsp; 四、以上优惠政策执行期自<span>2019</span>年<span>1</span>月<span>1</span>日至<span>2021</span>年<span>12</span>月<span>31</span>日。纳税人未缴及欠缴的以往年度税款，按原政策规定执行。符合减税降费政策的纳税人多缴税款可向税务机关申请退税。</span></span></span>
        </p>
        <p>
          <br />
      <span><span><span><span></span></span></span></span> 
        </p>
      </div>
      <span><span><span>&nbsp;&nbsp;&nbsp; 请您及时根据实际经营情况，如实向主管税务机关申报有关优惠事项，我们将竭诚为您提供便捷高效的服务。更多更详细的政策可通过扫描文书末端二维码查询。</span><span></span></span></span> 
      <p>
        <span><span><br />
      </span></span> 
      </p>
      <br />`
    },
    onLoad(){
       let info = wx.getSystemInfoSync();
       let scrollHeight = info.windowHeight - 90;
       this.setData({scrollHeight:scrollHeight})
    }
  });
  