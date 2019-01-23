import fs from 'fs'
import moment from 'moment'
import requestUtil from '../utils/request-util'
import listUtil from '../utils/list-util'
import LCSSSmsUtil from '../utils/lcss-sms-util'

const testSendMail = async (fastify) => {
  const sendMailResult = await fastify.nodemailer.sendMail({
    receiver: ['576507045@qq.com'],
    subject: 'Test sending email by nodeJS',
    text: `Hello! This is a test email sent by nodeJS.`
  })
  logger.debug('sendMailResult =', sendMailResult)
}

const testRedis = async (fastify) => {
  logger.debug(await fastify.redis.store('case_', '1', {a: 'a', case_id: '1'}))
  logger.debug(await fastify.redis.store('case_', '2', {b: 'b', case_id: '2'}))
  logger.debug(await fastify.redis.get('case_', '2'))
  logger.debug(await fastify.redis.multiGet('case_', ['2', '3']))
  logger.debug(await fastify.redis.del('case_', '41415'))

  // await fastify.redis.flushdb()
}

export default async (fastify) => {
  const mobiles = [
    '13700627348','15327226430','18689200906','13786936093','15077852355','15921296734','13601118189','13469994909','18618238320','18620112233','15981934615','15811276120','15876553927','15021888862','13168816655','15947515144','18910962266','13925205545','18692292800','13007166211','13510076999','13838277691','18010096034','13817934520','13524358187','18751916846','18917974750','13501172380','18312671563','13657266126','13269699706','15307112860','13922484096','13817195896','18611957022','15838280909','13937138818','13911085216','13783681237','15011419298','18697673963','13622803105','18670378507','13911462959','18717932886','13008683803','13570542220','15848935491','18874225519','13995577149','13914768890','13609060134','13632874566','18627130344','18611619924','18507136000','13776677020','15111135506','18500973287','13917779860','13537829109','13901327789','13662264781','18901138981','18600175266','13716139513','18616999775','15150585659','18277227451','13621675116','13911550563','13439927630','18310846109','17372751419','18502739302','13986101311','15921915375','15811034003','18607103733','17181288133','18611391922','13714729600','13911823839','15919889852','13538257165','13627102565','14789870436','13817161077','18612259881','13564684487','13811236280','15873155144','15107175573','15611008090','13928500906','13361920189','13651180641','13910583306','18819188307','13765205475','15210502739','15311073382','18657777118','18905172095','15766180143','15000956191','13564586966','13570012001','13888128752','13916928210','13810109131','13888424287','13661351460','13601263161','13810124704','13769852888','18639579889','18186511645','15084870661','13871198868','18610880804','15810858892','13910809090','18045081118','18620252122','13973100758','18201242536','13510066893','15093232927','15874183927','17704713565','13673648211','15651775562','13222733599','15126691189','18618299456','15051888065','13520170215','13817195686','13816068664','13911865295','13760712989','18251919040','15810776551','13570500216','18717861278','13401020955','18701555991','13391237390','13713947310','15981810838','13802400749','18529111555','13710023931','15005183888','15211911010','13889909862','15808841393','13146721999','18100288838','13932925709','13581688905','13928727104','13914494118','17710269888','15887152948','15901837889','15601766655','13910841101','13275272088','18804730033','18611752375','13524674568','18670045182','18601196100','13070146025','13795336302','13533774314','13751038711','15999926363','18037468818','13770567900','18569487303','18121126075','13120894050','13381086961','13370035838','13798419892','18521058787','15819048694','13439623371','13761488414','13510482956','13910790292','13816966650','13509299128','13570886598','13466406936','15901242426','15838191522','13073424242','18971299388','13816990584','13346941879','13725209051','15701351350','13601860503','13510170669','13925275439','18913813911','15011703198','13268053374','15811269288','17712409998','13705181184','18068806568','13902996606','18061789126','13764086486','15778736435','18310087014','13926523182','18551720836','17600181031','13760396665','13801631896','18721898889','13724075920','18601281561','13501990113','17346584671','18801080059','15811166191','13701335047','13927419736','13580365880','13910825516','13510633812','13560013337','13888659129','15818141088','15810479766','18114034675','15905191775','13811821126','13564385886','15989187526','13510976771','18717899907','13701189073','13913010207','15601956518','18301851017','13755049226','13911791917','13918261241','13811206675','13875984849','18647103032','18082759688','18616262152','13811169459','15938798321','18355675840','13810156060','13501840460','13714805783','15910447416','15921078893','18007485755','13601686687','13816801684','13910525367','13851576646','13918193303','15221293326','18637108208','13888947706','13122619380','15852927122','13510282272','13316091916','13585948032','18665716568','13911711825','13480876060','13761655442','13801913230','18820295112','18343146310','13958830663','15001222521','15810499997','18614085803','13810398657','18163751629','13469979122','13901197041','15251833440','18810773076','18101819766','15915476681','13678726915','13552907734','18611398570','15518187542','13770913708','13823267668','13922298526','13585681651','18657099966','15975560572','15248010900','18516516511','13701324284','15000675528','18680295057','18321555537','13520210349','18001583270','13627427779','18250107729','18600080390','13701114050','18310580590','13585609809','13512700245','15887079997','13520326655','13811831671','13952084906','18600635952','13632498928','15927066580','13563496670','13173747609','13705148930','18816612378','18922348339','15118169423','13800000000','13718150508','13501855842','13911091772','13810308585','13477015766','18937128585','13482652708','13627291333','13911791139','13472613932','13145937929','13235554305','13566665023','18018678799','13632398811','15972954558','13818080320','15849116871','18616567197','13811349013','13560233598','13691388861','18515202079','13788902397','15802726953','18565597602','13811218837','15327128149','15814038612','13755112939','13888292661','13301832445','13851489497','13601080268','13914717788','18637167055','18511370150','15001174571','15011542865','18896951687','13798282799','17718511216','13913915478','15711067021','13701222295','13670261395','15210750155','15601936785','13691165452','13564166001','13681911266','13917178850','13528719859','18627209292','13787078119','13916213927','18674811266','15298377672','13530734453','13161998432','15000656904','13809878636','15367990588','18613168275','18926498976','13451931771','15896333584','15810882298','13524005907','13601953983','13813924793','15036968691','13530026826','13609060003','17764222550','13818088768','13585596290','15800600512','13823198112','18321377293','13681914991','13718624152','13651280804','18610119258','13818776360','13783698007','13651114353','15075869236','13911234412','17810320990','13951766819','13570918696','18825095782','13817123921','13811227448','18573120901','13813939953','13632426911','13809033114','15547197252','13523092999','13701695753','15307310822','13585927324','13952042460','13713932919','18820031909','15011560985','13312574103','15257975568','18717834288','18610001671','13564307685','18939865368','13667232361','18800316013','18647381614','18610557606','13651716624','18057970025','13808689871','15999674343','13916146617','15243761313','13823311283','15608655935','15810166234','13539919607','17898852298','18611575752','13875997967','18201166268','18811183633','18573140590','18201738719','18637170111','13809890208','13103858579','18521558380','18610494889','18513543134','13476014932','15807227757','13760390138','13597682631','17610767639','15976873245','13552380649','18252058587','13426196599','18201414846','13401034001','13875883380','15515875011','17787005245','18575688093','18801310193','18672655557','13051959143','15343838066','13632233606','15827308356','13381110827','13928907380','18674896219','17839958126','18347255467','13761670908','15071057112','18094300001','18248239230','15800008515','15515173556','13426451187','18229207545','15337203857','18621919185','18851651977','13811087756','13917165815','18948337150','13715229070','15919345687','13683188927','13241848202','13801116898','15010279667','18971019658','18810151785','17610698066','18627319711','13901365856','15836583855','13761262472','18705646785','13646846886','18438369216','13682364952','15871723288','13545875055','18611872407','15827336840','13521118780','18810810168','13907114057','18003949134','18986068686','17777789271','15037103710','18610311203','15010157813','13585882269','15012700752','13818848050','13467622021','13971372907','13560727812','13770865574','18616524336','13396061009','13017311555','15572933379','13249436738','13451922800','13683573626','18373797595','15701099665','18070206669','13816646110','13011191161','18673388221','15516981373','15311980269','13410361234','13783524951','13972727995','13918811971','18621807682','15225071589','13683547150','13124866988','18538586332','13715254282','15116994827','18617082492','15701281750','15517163639','15801036092','15926304203','15261871627','13480238884','13824342690','13701936466','13810315138','15973278329','15850623672','13476254225','13770513188','15999782727','18501985763','15904897527','18971037257','15821406180','13905160214','15210157568','13146386191','13552711935','18611189986','15221879458','13810862240','13911135759','18611923982','18721818779','18600997768','13519806467','13307177066','13601018976','13451843117','15038256068','13811334715','18621108169','13401195804','15801575722','18610671955','15810558550','18666273089','13725330166','13763376866','13301350896','13661033863','18071755176','18758025450','13430923878','18600089335','18662707086','13978139898','13650716441','15021136270','17786177678','15986630618','18616802578','15110256813','18608601227','15070047925','18826227481','13316003928','15026910221','18681587387','18017763977','18611429058','13786111918','13428953342','18610255735','18938961798','13016165208','13971264000','18916668309','13637316409','18621506767','13436875596','13910663138','13548571240','18664898502','18205183884','15121101171','13611938756','18703832666','13911610816','18689202823','15000962519','13750282999','18621172121','15661128899','13713699970','13708437322','13818608535','13564234098','18670779881','13810022252','13581663058','18210172307','18219056766','18916170272','15084807606','13923443557','15101192090','13687300927','13607664733','15172433307','13922132998','13564600026','18318020571','13917839365','18221773004','18507122308','13764761085','13719393473','18788134718','15011156396','13760304099','13601334010','18939754307','13480978224','18306605738','15365028088','18922781034','13333333333','13802989789','13871131996','13621993921','15205197105','13607186717','18580102827','17703831899','15302738116','18928478919','13185870017','13711666928','18611491105','15001386934','13298194633','18673776086','18936033053','13845456556','13851605223','13636581498','13631495731','18500236328','13488852532','15920427225','13798331266','15201794908','13143364376','15273115875','13811036333','18600130039','15026615723','13823338816','13327311350','18651856662','13918777999','15871775736','13560416545','13813931218','13911696122','13716245873','13886004884','18520842737','13816554919','13715295050','15871717574','13564664891','13321165368','13534264253','13986063833','18610808411','15101672378','18753190867','13602097713','13973119656','18507317533','13488838488','15038106065','15722921922','13122668921','15050666202','13601631637','15926365556','18611688670','18811667129','15026712338','13916268759','18521713023','13818070511','18951023880','17778082691','13512766460','19910520679','13761507066','18033730997','13681217076','18516777580','15037129688','15140214458','13535070771','15580801828','13357705060','13811556193','13112290052','13265920313','13508511740','18818875806','13826155925','15901309609','13521705865','15517109227','13606245096','18601393669','13811517062','15139672592','13390775901','13760696468','13810455080','15951880773','13524228108','13795456298','18986260610','13814095199','13607939672','13710002045','15801022590','15001230256','13723700025','15877953939','13764150255','13926266309','13947151357','13911856135','18911662976','18612685759','18627908917','13782529357','15890608999','13910009152','18601172731','18501066662','18922432515','15921168160','18600604478','18670339702','18622883171','13661783342','13754714115','13001126223','15850580285','13910890233','13789510063','13671685487','18908491458','18701695926','15111034075','13402167633','13387499471','17620393962','15914124433','13524265493','13801688729','13913344603','13611683506','18601986600','13585109218','13560032755','13901782025','15915324977','13693666593','18916970215','13911519189','18518096728','13915927622','15987365275','15801225723','13810035456','18612896883','15118023830','13770569545','13510151627','18608716708','13601120922','13810469084','18611010422','18611350691','13923733591','15203019999','13510944664','13062862838','13523537936','14782028999','18620292005','13724097749','17710820523','13242998866','15700766363','15970429275','15312999446','13552838173','18008433375','13548655630','13678786034','15316811050','13632531516','15210692612','18607185914','13627917925','13925263158','18974574560','15367110491','13705197161','15367857602','18974835358','13718346147','13417699450','13517475739','13716316595','15375065206','13621629334','13701973806','13818121523','13951936856','13260484248','15921270281','15674907180','13811583498','18684707989','18600241024','13524302205','13901033618','13530525023','18710146720','13418800795','15839009527','13817197661','15101439927','13917319360','18611101537','13971079609','15111355243','13651106675','18761603180','18500093558','18611856893','13439783559','18913983716','18610806579','18502085070','18518938608','13416298715','15800006664','13874919904','13913829672','13918322280','15813731069','18500828824','13480879887','13810964321','18673126107','17372957646','18129930119','13759571885','13316487025','13232665539','17621033888','18588879155','15989143512','13787089960','18911595229','15921424282','18620749992','13671881098','18186127927','13701885982','13989782555','13917826189','13477032438','15093078171','13674821567','13851810595','18701667149','18202165357','15016682631','17788110504','13664846732','18911330283','15810161947','17727678558','13627110291','13810749797','13701066381','15116973430','13810497357','13751767914','18638228300','18163631535','13710768040','18819701023','18717188088','13560383639','15071065308','13570995728','13027734900','15919939871','13764861763','13888900841','13636462036','13641399759','13971597765','13603983249','18301273115','18501232607','13916685300', '15018504763', '18665928834', '13603077702'
  ]

  // const content = '【中信银行】邀您办理女性专用白金卡，购物双倍积分免年费；享10万女性健康险；24小时内有效http://tb.cn.hn/upG退订回T'

  // logger.info('领创盛世短信发送记录: 号码个数【', mobiles.length, '】, 短信内容【', content, '】')

  // await LCSSSmsUtil.sendMail({
  //   mobiles,
  //   content
  // })

  // await testSendMail(fastify)

  // await testRedis(fastify)

  // console.log('moment start timestamp =', moment(`2018-06-01 00:00:00`, 'YYYY-MM-DD HH:mm:ss').valueOf())
  // console.log('moment end timestamp =', moment(`2018-07-01 00:00:00`, 'YYYY-MM-DD HH:mm:ss').valueOf())

  // await requestUtil.sendRequest({
  //   port: 8911,
  //   url: '/mail/send',
  //   method: 'post',
  //   multipart: true,
  //   params: {
  //     files: [
  //       // fs.createReadStream('/Users/shupeipei/DeskTop/test1.xlsx'),
  //       // more file.
  //     ],
  //     to: '576507045@qq.com'
  //   }
  // })
}
