 SELECT JBXX.XMBH AS 项目编号,
       (CASE JBXX.SPLXDM
         WHEN '1' THEN
          '登记表'
         WHEN '2' THEN
          '报告表'
         WHEN '3' THEN
          '报告书'
       END) AS 环评类型,
       JBXX.XMMC AS 项目名称,
       (CASE JBXX.XMLXDM
         WHEN '1' THEN
          '生产类'
         WHEN '2' THEN
          '饮食娱乐类'
         WHEN '3' THEN
          '项目开发类'
       END) AS 项目类型,
       (CASE JBXX.XMFLDM
         WHEN '1' THEN
          'Ⅰ类'
         WHEN '2' THEN
          'Ⅱ类'
         WHEN '3' THEN
          'Ⅲ类'
       END) AS 项目分类,
       (CASE JBXX.LYDM
         WHEN '1' THEN
          '茅洲河流域'
         WHEN '2' THEN
          '观澜河流域'
         ELSE
          ' '
       END) AS 流域代码,
       U_POWER.P_F_COMDMNR('37', JBXX.JSXZDM) 建设性质,
       U_POWER.P_F_COMDMNR('5', JBXX.QYGMDM) 企业规模,
       U_POWER.P_F_COMDMNR('2', JBXX.JJLXDM) 经济类型,
       hy.hylx AS 行业类型,
       JBXX.ZCDZ AS 注册地址,
       JBXX.TZDWDZ AS 投资单位地址,
       JBXX.TZDW AS 投资单位,
       JBXX.XMZTZ AS 项目总投资,
       JBXX.HBZTZ AS 环保总投资,
       JBXX.SFGS AS 是否公示,
       U_POWER.P_F_COMDMNR('357', JBXX.SFTGSP) 审批结果,
       JBXX.HXXYL AS 化学需氧量,
       JBXX.EYHL AS 二氧化硫,
       QYHW AS 氢氧化物,
       JBXX.NHN AS 氨氮,
       (CASE JBXX.STSXM
         WHEN '1' THEN
          '是'
         WHEN '0' THEN
          '否'
       END) AS 三同时项目,
       (CASE JBXX.SFSTSGZ
         WHEN '0' THEN
          '是'
         WHEN '1' THEN
          '否'
       END) AS 是否跟踪,
       U_POWER.P_F_COMDMNR('gzlx', JBXX.STSGZLX) 跟踪和验收类型,
       U_POWER.P_F_COMDMNR('3333', JBXX.GZDW) 跟踪单位,
       JBXX.SWY AS 收文员,
       U_POWER.P_TO_CHAR(JBXX.SLRQ, 'YYYY-MM-DD') AS 受理日期,
       JBXX.SPY AS 初审员,
       U_POWER.P_TO_CHAR(JBXX.SPRQ, 'YYYY-MM-DD') AS 审批日期,
       PW.YXQ,
       (CASE PW.YXQ
       WHEN '1' THEN '一年'
       WHEN '2' THEN '二年'
       WHEN '3' THEN '三年'
       WHEN '4' THEN '四年'
       WHEN '5' THEN '五年'
       WHEN '0' THEN '永久有效' 
       END ) AS 有效期
  FROM T_XMSP_SP_JBXX JBXX
  JOIN T_XMSP_PW PW
    ON JBXX.XMBH = PW.XMBH
    JOIN T_COMN_HYLX  hy ON JBXX.HYLXDM = hy.HYLXDM
 WHERE JBXX.XMBH = '20144403020263';