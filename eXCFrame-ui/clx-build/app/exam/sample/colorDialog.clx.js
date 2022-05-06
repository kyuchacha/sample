/*
 * App URI: app/exam/sample/colorDialog
 * Source Location: app/exam/sample/colorDialog.clx
 *
 * This file was generated by eXbuilder6 compiler, Don't edit manually.
 */
(function(){
	var app = new cpr.core.App("app/exam/sample/colorDialog", {
		onPrepare: function(loader){
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports){
			var linker = {};
			// Start - User Script
			/************************************************
			 * projMainDialog.js
			 * Created at 2019. 3. 7. 오전 8:04:42.
			 *
			 * @author kjyan
			 ************************************************/
			
			/*색상표 데이터*/
			var arr01 = [
			 ['#FFF7F7', '#FEF8F8', '#FDF9F9', '#FCF9F9'], 
			 ['#FFECEC', '#FCEEEE', '#FAF1F1', '#F9F2F2'], 
			 ['#FFCCCC', '#F8D2D2', '#F2D9D9', '#EFDCDC'], 
			 ['#FF9999', '#F2A6A6', '#E5B2B2', '#DEB8B8'], 
			 ['#FF6666', '#EC7979', '#D88C8C', '#CE9595'], 
			 ['#FF3333', '#E54C4C', '#CC6666', '#BF7373'], 
			 ['#FF0000', '#DF2020', '#BF4040', '#AF5050'], 
			 ['#E60000', '#C91D1D', '#AC3939', '#9D4747'], 
			 ['#CC0000', '#B21919', '#993333', '#8C4040'], 
			 ['#B30000', '#9C1616', '#862D2D', '#7B3838'], 
			 ['#990000', '#861313', '#722626', '#682F2F'], 
			 ['#660000', '#590D0D', '#4C1919', '#451F1F'], 
			 ['#4D0000', '#430909', '#391313', '#341818'], 
			 ['#340000', '#2D0606', '#270D0D', '#231010'], 
			 ['#270000', '#220505', '#1D0A0A', '#1A0C0C'] 
			];
			
			var arr02 = [
			 ['#FFFCFB', '#FEFCFB', '#FEFCFC', '#FDFCFC'], 
			 ['#FFF8F6', '#FDF9F7', '#FCF9F8', '#FBF9F9'], 
			 ['#FFEDE9', '#FCEFEC', '#F9F0EE', '#F6F2F1'], 
			 ['#FFDCD4', '#F8DED9', '#F4E3DF', '#EFE6E4'], 
			 ['#FFC4B7', '#F5C9C0', '#EDCFC9', '#E4D5D2'], 
			 ['#FFAB98', '#F0B3A5', '#E5BBB2', '#D8C3BE'], 
			 ['#FF967E', '#EDA08F', '#DEAA9E', '#CEB4AE'], 
			 ['#FF6947', '#E5785F', '#D18675', '#BA948C'], 
			 ['#FF4419', '#DF5738', '#C56852', '#A87A6F'], 
			 ['#FF3000', '#DC4522', '#BF5840', '#9F6B5F'], 
			 ['#E62B00', '#C63E1F', '#AC4F39', '#8F6156'], 
			 ['#B82200', '#9E3118', '#8A3F2E', '#734D45'], 
			 ['#931B00', '#7E2713', '#6E3225', '#5C3E37'], 
			 ['#671300', '#581B0D', '#4D231A', '#402B26'], 
			 ['#581000', '#4C180C', '#421E16', '#372521'], 
			 ['#3E0B00', '#361008', '#2E140F', '#261A17'] 
			];
			
			var arr03 = [
			 ['#FFFDFA', '#FEFCFA', '#FDFCFB', '#FDFDFC'], 
			 ['#FFF7EF', '#FDF7F1', '#FBF7F3', '#F9F7F5'], 
			 ['#FFEBD8', '#FAEBDD', '#F5EBE2', '#F0EBE6'], 
			 ['#FFD7B2', '#F5D7BB', '#EBD7C5', '#E2D8CF'], 
			 ['#FFCE9F', '#F3CEAB', '#E7CEB7', '#DBCFC3'], 
			 ['#FFBD7E', '#EFBD8E', '#DEBD9E', '#CEBEAE'], 
			 ['#FFA147', '#E8A15E', '#D1A275', '#BAA28C'], 
			 ['#FF8A19', '#E28A36', '#C58A52', '#A88B6F'], 
			 ['#FF7E00', '#DF7E20', '#BF7F40', '#9F7E5F'], 
			 ['#E87100', '#CA711D', '#AD733A', '#917357'], 
			 ['#CC6400', '#B2641A', '#986433', '#7F654C'], 
			 ['#AB5300', '#955315', '#80542B', '#6B5540'], 
			 ['#813E00', '#713F10', '#603F20', '#503F30'], 
			 ['#5B2C00', '#4F2C0B', '#442D17', '#392D22'], 
			 ['#3B1D00', '#331C07', '#2C1D0F', '#251D16'], 
			 ['#231100', '#1E1104', '#1A1109', '#16110D'] 
			];
			
			var arr04 = [
			 ['#FFFCF2', '#FBFAF5', '#FBFAF5', '#FAF9F7'], 
			 ['#FFF9E7', '#F9F6ED', '#F9F6ED', '#F6F4F0'], 
			 ['#FFF5D9', '#FAF3DE', '#F5F0E2', '#F0EEE7'], 
			 ['#FFEFBF', '#F7EBC7', '#EFE7CF', '#E7E3D7'], 
			 ['#FFE69D', '#F2DFA9', '#E6D9B5', '#DAD4C2'], 
			 ['#FFDC74', '#EDD385', '#DCCA97', '#CBC2A8'], 
			 ['#FFD047', '#E8C45E', '#D1B975', '#BAAE8C'], 
			 ['#FFC519', '#E2B636', '#C5A852', '#A89A6F'], 
			 ['#FFC000', '#DFAF20', '#BF9F40', '#9F8F5F'], 
			 ['#F3B600', '#D4A61E', '#B6973D', '#98895B'], 
			 ['#DBA300', '#BF951B', '#A48837', '#897B52'], 
			 ['#BA8B00', '#A27F17', '#8B732E', '#746846'], 
			 ['#956F00', '#826512', '#6F5C25', '#5D5338'], 
			 ['#705400', '#624D0E', '#54461C', '#463F2A'], 
			 ['#4F3B00', '#45360A', '#3B3114', '#312C1D'], 
			 ['#332600', '#2C2206', '#26200D', '#201D13'] 
			];
			
			var arr05 = [
			 ['#FFFEF8', '#FEFDF9', '#FDFDFA', '#FCFCFA'], 
			 ['#FFFDEF', '#FDFBF1', '#FBFAF3', '#F9F8F5'], 
			 ['#FFFCE0', '#FBF9E4', '#F7F5E8', '#F3F2EB'], 
			 ['#FFFAC7', '#F8F4CE', '#F1EED5', '#EAE9DC'], 
			 ['#FFF7A2', '#F3EFAD', '#E7E3B9', '#DCDAC5'], 
			 ['#FFF270', '#EDE382', '#DBD494', '#C9C6A5'], 
			 ['#FFED33', '#E5D74C', '#CCC366', '#B2AD7F'], 
			 ['#FFEA00', '#DFCF20', '#BFB440', '#9F995F'], 
			 ['#E6D200', '#C9BA1D', '#ACA239', '#8F8A56'], 
			 ['#C4B200', '#AB9D18', '#938A31', '#7A7549'], 
			 ['#9D8E00', '#897D13', '#756D27', '#625E3B'], 
			 ['#766A00', '#675E0F', '#58521D', '#49462C'], 
			 ['#554C00', '#4A430A', '#3F3A15', '#353320'], 
			 ['#3C3500', '#342F07', '#2D290F', '#252316'], 
			 ['#272300', '#221F05', '#1D1B0A', '#18170E'], 
			 ['#220013', '#141203', '#111006', '#0E0D08'] 
			];
			
			var arr06 = [
			 ['#F8FCF3', '#F8FBF4', '#F7F9F5', '#F7F8F6'], 
			 ['#F2F9E8', '#F2F7EA', '#F1F4EC', '#F0F2EE'], 
			 ['#E8F5D5', '#E7F1D9', '#E6EDDD', '#E6E9E1'], 
			 ['#D9EFB9', '#D8E8C0', '#D8E8C0', '#D5DACD'], 
			 ['#C4E693', '#C2DB9D', '#C0D1A8', '#BEC7B2'], 
			 ['#ABDC65', '#A8CD74', '#A6BE83', '#A3AF91'], 
			 ['#90D133', '#8CBD47', '#88A95A', '#85956E'], 
			 ['#74C600', '#6FAD19', '#6B9431', '#677B4A'], 
			 ['#69B319', '#659C16', '#61862D', '#5D7043'], 
			 ['#61A500', '#5D9014', '#597B29', '#56673E'], 
			 ['#549000', '#517E12', '#4E6C24', '#4B5A36'], 
			 ['#457700', '#42680F', '#40591E', '#3D4A2C'], 
			 ['#355C00', '#33500B', '#314517', '#2F3922'], 
			 ['#264200', '#233908', '#233110', '#222919'], 
			 ['#192C00', '#182605', '#17210B', '#161B10'], 
			 ['#0F1A00', '#0E1603', '#0D1306', '#0D100A'] 
			];
			
			var arr07 = [
			 ['#F7FAF6', '#F7F9F6', '#F7F9F7', '#F7F8F7'], 
			 ['#ECF5EB', '#EDF3EC', '#EEF2ED', '#EFF1EF'], 
			 ['#DFEEDD', '#E1ECDF', '#E2E9E1', '#E3E7E3'], 
			 ['#CBE4C9', '#CDE0CC', '#D1DDD0', '#D4DAD3'], 
			 ['#B3D7B0', '#B7D2B5', '#BBCDBA', '#BFC8BE'], 
			 ['#96C792', '#9BC098', '#A1B99F', '#A7B3A6'], 
			 ['#75B570', '#7CAC78', '#83A381', '#8B9B8A'], 
			 ['#52A34C', '#5C9857', '#658D62', '#6E826C'], 
			 ['#2D8F26', '#388233', '#437440', '#4F674D'], 
			 ['#087B00', '#156B0F', '#235C1F', '#304D2E'], 
			 ['#076900', '#125C0D', '#1D4E1A', '#294127'], 
			 ['#065400', '#0E490A', '#183F15', '#20341F'], 
			 ['#054100', '#0C3908', '#123010', '#192818'], 
			 ['#043100', '#092B06', '#0E240C', '#131E12'], 
			 ['#032200', '#061D04', '#0A1908', '#0E150D'], 
			 ['#021600', '#041303', '#061005', '#080D08'] 
			];
			
			var arr08 = [
			 ['#F9FCFC', '#F9FBFB', '#FAFBFB', '#FAFBFB'], 
			 ['#F2F8F8', '#F3F7F7', '#F3F6F6', '#F4F5F5'], 
			 ['#E7F2F1', '#E8F0EF', '#EAEFEF', '#EBEEEE'], 
			 ['#D6E9E7', '#D8E6E4', '#DBE4E3', '#DDE2E1'], 
			 ['#BDDCD9', '#C1D8D6', '#C5D4D2', '#C8D0CF'], 
			 ['#9ECCC7', '#A4C6C2', '#A9C0BD', '#AFBAB9'], 
			 ['#79B9B1', '#81B1AB', '#89A9A5', '#91A19F'], 
			 ['#51A59A', '#5B9A92', '#66908A', '#708582'], 
			 ['#268F81', '#338277', '#40746D', '#4D6763'], 
			 ['#006F61', '#0E6156', '#1C534C', '#294541'], 
			 ['#006054', '#0C544B', '#184842', '#243C39'], 
			 ['#005147', '#0A473F', '#143C37', '#1E322F'], 
			 ['#00433A', '#083A33', '#11322D', '#192A28'], 
			 ['#00342D', '#062D28', '#0D2723', '#13201E'], 
			 ['#002722', '#05221E', '#0A1D1A', '#0E1817'], 
			 ['#001B18', '#031715', '#071413', '#0A1110'] 
			];
			
			var arr09 = [
			 ['#F0F5F5', '#F0F4F4', '#F1F3F3', '#F2F3F3'], 
			 ['#E6EFEF', '#E7EEEE', '#E8ECEC', '#E9EBEB'], 
			 ['#D8E6E7', '#DAE4E5', '#DCE3E3', '#DDE1E1'], 
			 ['#C6DBDC', '#C9D8D9', '#CBD5D6', '#CED3D3'], 
			 ['#AFCCCE', '#B3C8CA', '#B7C5C6', '#BAC1C2'], 
			 ['#93BABD', '#98B5B7', '#9DB0B2', '#A3ACAD'], 
			 ['#74A6AB', '#7BA0A4', '#829A9D', '#889596'], 
			 ['#549198', '#5C8A8F', '#658387', '#6D7C7E'], 
			 ['#347C85', '#3E747B', '#486B70', '#526466'], 
			 ['#196B75', '#246169', '#30595E', '#3B4F52'], 
			 ['#005B66', '#0D5159', '#19464C', '#263C3F'], 
			 ['#00525C', '#0B4850', '#174045', '#223639'], 
			 ['#00464E', '#0A3E44', '#13363A', '#1D2E30'], 
			 ['#00383E', '#083136', '#0F2B2E', '#172426'], 
			 ['#002A2F', '#062529', '#0C2023', '#111C1D'], 
			 ['#001D21', '#041A1D', '#081618', '#0C1314'] 
			];
			
			var arr010 = [
			 ['#F6FCFF', '#F7FCFE', '#F8FBFC', '#F9FAFB'], 
			 ['#EDF9FF', '#EFF8FC', '#F1F7FA', '#F4F7F8'], 
			 ['#E0F4FF', '#E4F3FB', '#E8F2F7', '#EBF0F3'], 
			 ['#CEEEFF', '#D4ECF9', '#DAEAF2', '#E0E8EC'], 
			 ['#B3E5FF', '#BCE1F5', '#C6DFEC', '#CFDBE2'], 
			 ['#90D9FF', '#9ED4F1', '#ACD0E3', '#B9CBD5'], 
			 ['#65CBFF', '#78C4EB', '#8BBED8', '#9FB8C5'], 
			 ['#33BAFF', '#4CB1E5', '#66A9CC', '#7FA1B2'], 
			 ['#00A0F3', '#1E95D4', '#3D8CB6', '#5B8398'], 
			 ['#0092E0', '#1C89C4', '#3881A8', '#54788C'], 
			 ['#0080C6', '#1978AD', '#317194', '#4A6A7B'], 
			 ['#006CA7', '#156692', '#2A5F7D', '#3E5968'], 
			 ['#00588A', '#115378', '#224E67', '#344A56'], 
			 ['#00456C', '#0D415E', '#1B3D51', '#283943'], 
			 ['#00324E', '#0A2F44', '#132C3A', '#1D2930'], 
			 ['#002235', '#06202E', '#0D1E27', '#141C21'] 
			];
			
			var arr011 = [
			 ['#F7FAFF', '#F8FAFE', '#F9FAFD', '#FAFBFC'], 
			 ['#F1F6FF', '#F3F7FD', '#F4F6FB', '#F6F7F9'], 
			 ['#E7F0FF', '#EAF1FC', '#EDF1F9', '#F0F2F6'], 
			 ['#D9E7FF', '#DEE8FA', '#E2E9F5', '#E7EAF0'], 
			 ['#C4DAFF', '#CBDBF7', '#D3DEF0', '#DAE0E9'], 
			 ['#A8C9FF', '#B3CCF4', '#BECEE9', '#C8D0DE'], 
			 ['#85B3FF', '#94B6EF', '#A3BAE0', '#B3BED1'], 
			 ['#5B98FF', '#6F9DEA', '#84A2D6', '#98A7C1'], 
			 ['#2D7CFF', '#4782E4', '#6188CA', '#7C8FB0'], 
			 ['#0060FF', '#2068DF', '#4070BF', '#5F779F'], 
			 ['#0056E6', '#1D5DC9', '#3964AC', '#566B8F'], 
			 ['#0049C4', '#184FAB', '#315593', '#495B7A'], 
			 ['#003A9D', '#133E89', '#274475', '#3B4962'], 
			 ['#002C76', '#0F3067', '#1D3358', '#2C3749'], 
			 ['#001F53', '#0A2148', '#15243E', '#1F2734'], 
			 ['#001436', '#07162F', '#0D1D28', '#141921'] 
			];
			
			var arr012 = [
			 ['#F8F8FD', '#F8F8FC', '#F9F9FB', '#FAFAFB'], 
			 ['#F3F3FB', '#F4F4FA', '#F5F5F9', '#F6F6F8'], 
			 ['#EBEBF9', '#EDEDF7', '#EEEEF5', '#F0F0F3'], 
			 ['#E1E1F6', '#E3E3F3', '#E6E6F0', '#E9E9EE'], 
			 ['#D3D3F2', '#D7D7EE', '#DBDBEA', '#DEDEE6'], 
			 ['#C1C1ED', '#C6C6E7', '#CCCCE2', '#D1D1DC'], 
			 ['#ABABE7', '#B2B2DF', '#BABAD8', '#C1C1D0'], 
			 ['#8F8FDF', '#9999D5', '#A3A3CB', '#ADADC1'], 
			 ['#6F6FD6', '#7C7CC9', '#8989BC', '#9595AF'], 
			 ['#4B4BCC', '#5B5BBC', '#6B6BAB', '#7B7B9B'], 
			 ['#2626C2', '#3939AE', '#4D4D9B', '#606087'], 
			 ['#2222AF', '#33339D', '#45458B', '#57577A'], 
			 ['#1C1C90', '#2A2A81', '#393973', '#474764'], 
			 ['#16166F', '#212164', '#2C2C58', '#37374D'], 
			 ['#101050', '#181848', '#202040', '#282838'], 
			 ['#0A0A34', '#0F0F2E', '#141429', '#1A1A24'] 
			];
			
			var arr013 = [
			 ['#FAF8FE', '#FAF9FD', '#FAFAFC', '#FBFAFC'], 
			 ['#F3EDFC', '#F3EFFA', '#F4F2F6', '#F4F2F6'], 
			 ['#EBE2FA', '#ECE5F7', '#ECE8F4', '#EDEBF1'], 
			 ['#E1D4F7', '#E2D8F2', '#E3DDEE', '#E4E1EA'], 
			 ['#D4C2F3', '#D6C8ED', '#D7CEE6', '#D8D4E0'], 
			 ['#C3ABEE', '#C5B3E5', '#C8BCDD', '#CAC4D5'], 
			 ['#AF8FE8', '#B29ADD', '#B5A5D1', '#B8B0C6'], 
			 ['#9970E1', '#9D7ED3', '#A08CC4', '#A49AB6'], 
			 ['#804CD9', '#845DC7', '#896FB5', '#8E81A4'], 
			 ['#6526D1', '#6A3BBB', '#7051A6', '#766691'], 
			 ['#4B00C9', '#5119B0', '#573296', '#5E4B7D'], 
			 ['#3E00A7', '#431592', '#492A7D', '#4E3E68'], 
			 ['#300081', '#341071', '#382060', '#3C3050'], 
			 ['#23005D', '#250B51', '#281745', '#2C233A'], 
			 ['#190041', '#1B0839', '#1C1030', '#1E1828'], 
			 ['#10002A', '#110524', '#120A1F', '#14101A'] 
			];
			
			var arr014 = [
			 ['#FAF8FC', '#F9F8FB', '#FAF9FB', '#F9F9FA'], 
			 ['#F6F2F9', '#F6F3F8', '#F6F4F7', '#F5F4F6'], 
			 ['#F0E9F5', '#EFEAF3', '#EFECF2', '#EFEDF0'], 
			 ['#E7DCEF', '#E6DEEC', '#E6E1EA', '#E6E3E8'], 
			 ['#DACAE6', '#D9CDE2', '#D9D1DF', '#D8D4DB'], 
			 ['#CAB2DB', '#C9B7D6', '#C8BCD0', '#C7C1CB'], 
			 ['#B594CD', '#B49BC6', '#B2A2BE', '#B1A9B7'], 
			 ['#9D71BD', '#9B7AB3', '#9A84AA', '#988DA0'], 
			 ['#834CAC', '#8158A0', '#7F6494', '#7E7088'], 
			 ['#68269A', '#65348B', '#64437D', '#61516E'], 
			 ['#4D0088', '#4A1177', '#4A1177', '#463355'], 
			 ['#420074', '#3F0E65', '#3E1D57', '#3B2B48'], 
			 ['#35005D', '#330B51', '#311745', '#30233A'], 
			 ['#260043', '#24083A', '#241132', '#23192A'], 
			 ['#19002D', '#180527', '#170B21', '#17111C'], 
			 ['#0E0019', '#0E0316', '#0D0612', '#0C090F'] 
			];
			
			var arr015 = [
			 ['#FFF6FE', '#FEF7FD', '#FCF8FC', '#FBF9FB'], 
			 ['#FFEEFE', '#FDF0FC', '#FAF2F9', '#F8F4F8'], 
			 ['#FFE2FE', '#FBE5FA', '#F7E9F6', '#F4EDF4'], 
			 ['#FFD1FD', '#F9D7F7', '#F3DCF2', '#EDE2EC'], 
			 ['#FFB9FC', '#F6C2F4', '#EDCAEB', '#E4D3E3'], 
			 ['#FF99FA', '#F2A6EE', '#E5B2E2', '#D8BFD7'], 
			 ['#FF71F8', '#ED83E7', '#DB94D7', '#C9A6C7'], 
			 ['#FF3FF7', '#E757E0', '#CF6FCA', '#B787B5'], 
			 ['#FF00F6', '#DF20D8', '#BF40BA', '#9F5F9C'], 
			 ['#E600DD', '#C91DC2', '#AC39A7', '#8F568D'], 
			 ['#BD00B6', '#A5179F', '#8D2F89', '#764774'], 
			 ['#9C0095', '#881383', '#752771', '#613A5F'], 
			 ['#7A0073', '#6A0F64', '#5B1E57', '#4C2E4A'], 
			 ['#590054', '#4E0B4A', '#42163F', '#372136'], 
			 ['#3E003B', '#360834', '#2E0F2C', '#261725'], 
			 ['#270025', '#220520', '#1D0A1C', '#180E17'] 
			];
			
			var arr016 = [
			 ['#FFF5FA', '#FDF6F9', '#FCF7F9', '#FBF9FA'], 
			 ['#FFE8F5', '#FCEBF5', '#F9EEF4', '#F6F0F3'], 
			 ['#FFD6ED', '#FADBEC', '#F4E0EB', '#EFE5EB'], 
			 ['#FFBEE2', '#F7C6E1', '#EECEE0', '#E6D6DF'], 
			 ['#FFA2D6', '#F3ADD4', '#E7B9D3', '#DCC5D2'], 
			 ['#FF82C8', '#EF91C6', '#DFA1C4', '#D0B1C2'], 
			 ['#FF59B6', '#EA6EB3', '#D582B0', '#C097AE'], 
			 ['#FF2DA4', '#E447A0', '#CA619C', '#B07C99'], 
			 ['#FF0090', '#DF208B', '#BF4087', '#9F5F83'], 
			 ['#E60081', '#C91D7D', '#AC3979', '#8F5676'], 
			 ['#C4006D', '#AB186A', '#933167', '#7A4964'], 
			 ['#A1005A', '#8D1458', '#782855', '#643C52'], 
			 ['#7C0046', '#6C0F43', '#5D1F42', '#4D2E3F'], 
			 ['#590033', '#4E0B31', '#42162F', '#37212E'], 
			 ['#3A0021', '#32071F', '#2B0E1E', '#24161E'], 
			 ['#220013', '#1D0412', '#190811', '#150D11'] 
			];
			
			/*
			 * Body에서 load 이벤트 발생 시 호출.
			 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
			 */
			function onBodyLoad(/* cpr.events.CEvent */ e){
				var arr00 = [
				  '#FF0000', '#FF3000', '#FF7200', '#FFC000', '#FFEA00', 
				  '#74C600', '#087B00', '#007B6B', '#005B66', '#00A9FF', 
				  '#0060FF', '#0000B7', '#4B00C9', '#4D0088', '#FF00F6', 
				  '#FF0090' 
				];
				
				var ds_color = app.lookup("ds_color");
				var grp_color = app.lookup("grp_color");
				for(var i=0; i<arr00.length; i++) {
					ds_color.addColumn(new cpr.data.header.DataHeader("arr0"+(i+1), "string"));
				}
				
				ds_color.addRow();
				for(var i=0; i<arr00.length; i++) {
					ds_color.setValue(0, "arr0"+(i+1), arr00[i]);
					grp_color.getChildren()[i].style.css("backgroundColor", arr00[i]);
					grp_color.getChildren()[i].fieldLabel="arr0"+(i+1);
					grp_color.getChildren()[i].bind("value").toExpression("\"" + arr00[i].toString()+ "\"");
				}
				// 프로그램 실행 시 첫 번쨰 버튼을 클릭해서 목록을 보여주도록 설정
				grp_color.getChildren()[0].dispatchEvent(new cpr.events.CEvent("click"));
			}
			
			
			/*
			 * 아웃풋에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onOutputClick(/* cpr.events.CMouseEvent */ e){
				/** 
				 * @type cpr.controls.Output
				 */
				var output = e.control;
				var colorData = output.fieldLabel;
				
				if(colorData == "arr01") drawGrid(arr01);
				else if(colorData == "arr01") drawGrid(arr01);
				else if(colorData == "arr02") drawGrid(arr02);
				else if(colorData == "arr03") drawGrid(arr03);
				else if(colorData == "arr04") drawGrid(arr04);
				else if(colorData == "arr05") drawGrid(arr05);
				else if(colorData == "arr06") drawGrid(arr06);
				else if(colorData == "arr07") drawGrid(arr07);
				else if(colorData == "arr08") drawGrid(arr08);
				else if(colorData == "arr09") drawGrid(arr09);
				else if(colorData == "arr010") drawGrid(arr010);
				else if(colorData == "arr011") drawGrid(arr011);
				else if(colorData == "arr012") drawGrid(arr012);
				else if(colorData == "arr013") drawGrid(arr013);
				else if(colorData == "arr014") drawGrid(arr014);
				else if(colorData == "arr015") drawGrid(arr015);
				else if(colorData == "arr016") drawGrid(arr016);
				
			}
			
			/* 
			 * 그리드에 각각의 그룹에 해당하는 색이 보여지도록 설정
			 */
			function drawGrid(arr) {
				var ds_colorTable = app.lookup("ds_colorTable");
				ds_colorTable.clear();
				for(var i=0; i<arr.length; i++) {
					ds_colorTable.addRow();
					for(var j=0; j<4; j++) {
						ds_colorTable.setValue(i, "color" + (j+1), arr[i][j]);
					}
				}
				app.lookup("grd1").redraw();
			}
			
			/*
			 * 그리드에서 dblclick 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 더블 클릭할 때 발생하는 이벤트.
			 */
			function onGrd1Dblclick(/* cpr.events.CMouseEvent */ e){
				/** 
				 * @type cpr.controls.Grid
				 */
				var grd1 = e.control;
				var cell = grd1.getSelectedCellIndices()[0];
				var color = grd1.getCellValue(cell.rowIndex, cell.cellIndex);
			//	alert(color + " 선택!");
			//	app.getHostAppInstance().lookup("color").value = color; 
				app.close(color);
			}
			
			
			/*
			 * "화면닫기" 버튼(btnClose)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onBtnCloseClick(/* cpr.events.CMouseEvent */ e){
				/** 
				 * @type cpr.controls.Button
				 */
				var btnClose = e.control;
				app.close();
			}
			
			
			/*
			 * "선택닫기" 버튼(btnSelect)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onBtnSelectClick(/* cpr.events.CMouseEvent */ e){
				/** 
				 * @type cpr.controls.Button
				 */
				var btnSelect = e.control;
				var vcGrd = app.lookup("grd1");
				var cell = vcGrd.getSelectedCellIndices()[0];
				var color = vcGrd.getCellValue(cell.rowIndex, cell.cellIndex);
				app.close(color);
			};
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("ds_color");
			dataSet_1.parseData({});
			app.register(dataSet_1);
			
			var dataSet_2 = new cpr.data.DataSet("ds_colorTable");
			dataSet_2.parseData({
				"columns" : [
					{"name": "color1"},
					{"name": "color2"},
					{"name": "color3"},
					{"name": "color4"}
				]
			});
			app.register(dataSet_2);
			
			app.supportMedia("all and (min-width: 1320px)", "eXFrame");
			app.supportMedia("all and (min-width: 1024px) and (max-width: 1319px)", "default");
			app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
			app.supportMedia("all and (max-width: 499px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"width" : "100%",
				"top" : "0px",
				"height" : "100%",
				"left" : "0px"
			});
			
			// Layout
			var verticalLayout_1 = new cpr.controls.layouts.VerticalLayout();
			container.setLayout(verticalLayout_1);
			
			// UI Configuration
			var group_1 = new cpr.controls.Container("grp2");
			group_1.style.setClasses(["header-box"]);
			// Layout
			var verticalLayout_2 = new cpr.controls.layouts.VerticalLayout();
			verticalLayout_2.spacing = 0;
			group_1.setLayout(verticalLayout_2);
			(function(container){
				var userDefinedControl_1 = new udc.com.appHeader("appheader1");
				userDefinedControl_1.style.setClasses(["header-box"]);
				container.addChild(userDefinedControl_1, {
					"width": "500px",
					"height": "30px"
				});
			})(group_1);
			container.addChild(group_1, {
				"autoSize": "height",
				"width": "1024px",
				"height": "30px"
			});
			
			var group_2 = new cpr.controls.Container("grpData");
			// Layout
			var formLayout_1 = new cpr.controls.layouts.FormLayout();
			formLayout_1.topMargin = "0px";
			formLayout_1.rightMargin = "0px";
			formLayout_1.bottomMargin = "0px";
			formLayout_1.leftMargin = "0px";
			formLayout_1.horizontalSpacing = "5px";
			formLayout_1.verticalSpacing = "5px";
			formLayout_1.setColumns(["1fr"]);
			formLayout_1.setRows(["25px", "1fr"]);
			group_2.setLayout(formLayout_1);
			(function(container){
				var userDefinedControl_2 = linker.userDefinedControl_2 = new udc.com.comFormTitle("comformtitle1");
				container.addChild(userDefinedControl_2, {
					"colIndex": 0,
					"rowIndex": 0
				});
				var group_3 = linker.group_3 = new cpr.controls.Container("grp1");
				group_3.fieldLabel = "색상표";
				// Layout
				var formLayout_2 = new cpr.controls.layouts.FormLayout();
				formLayout_2.horizontalSpacing = "5px";
				formLayout_2.verticalSpacing = "5px";
				formLayout_2.setColumns(["1fr"]);
				formLayout_2.setRows(["30px", "1fr", "35px"]);
				formLayout_2.setRowAutoSizing(0, true);
				group_3.setLayout(formLayout_2);
				(function(container){
					var group_4 = new cpr.controls.Container("grp_color");
					var dataRowContext_1 = new cpr.bind.DataRowContext(app.lookup("ds_color"), 0);
					group_4.setBindContext(dataRowContext_1);
					// Layout
					var formLayout_3 = new cpr.controls.layouts.FormLayout();
					formLayout_3.horizontalSpacing = "3px";
					formLayout_3.verticalSpacing = "0px";
					formLayout_3.setColumns(["45px", "45px", "45px", "45px", "45px", "45px", "45px", "45px", "45px", "45px", "45px", "45px", "45px", "45px", "45px", "45px"]);
					formLayout_3.setRows(["25px"]);
					group_4.setLayout(formLayout_3);
					(function(container){
						var output_1 = new cpr.controls.Output("opt1");
						output_1.value = "";
						output_1.style.css({
							"font-weight" : "bold",
							"font-size" : "10px",
							"text-align" : "center"
						});
						if(typeof onOutputClick == "function") {
							output_1.addEventListener("click", onOutputClick);
						}
						container.addChild(output_1, {
							"colIndex": 0,
							"rowIndex": 0
						});
						var output_2 = new cpr.controls.Output();
						output_2.value = "";
						output_2.style.css({
							"font-weight" : "bold",
							"font-size" : "10px",
							"text-align" : "center"
						});
						if(typeof onOutputClick == "function") {
							output_2.addEventListener("click", onOutputClick);
						}
						container.addChild(output_2, {
							"colIndex": 2,
							"rowIndex": 0
						});
						var output_3 = new cpr.controls.Output();
						output_3.value = "";
						output_3.style.css({
							"font-weight" : "bold",
							"font-size" : "10px",
							"text-align" : "center"
						});
						if(typeof onOutputClick == "function") {
							output_3.addEventListener("click", onOutputClick);
						}
						container.addChild(output_3, {
							"colIndex": 3,
							"rowIndex": 0
						});
						var output_4 = new cpr.controls.Output();
						output_4.value = "";
						output_4.style.css({
							"font-weight" : "bold",
							"font-size" : "10px",
							"text-align" : "center"
						});
						if(typeof onOutputClick == "function") {
							output_4.addEventListener("click", onOutputClick);
						}
						container.addChild(output_4, {
							"colIndex": 4,
							"rowIndex": 0
						});
						var output_5 = new cpr.controls.Output();
						output_5.value = "";
						output_5.style.css({
							"font-weight" : "bold",
							"font-size" : "10px",
							"text-align" : "center"
						});
						if(typeof onOutputClick == "function") {
							output_5.addEventListener("click", onOutputClick);
						}
						container.addChild(output_5, {
							"colIndex": 5,
							"rowIndex": 0
						});
						var output_6 = new cpr.controls.Output();
						output_6.value = "";
						output_6.style.css({
							"font-weight" : "bold",
							"font-size" : "10px",
							"text-align" : "center"
						});
						if(typeof onOutputClick == "function") {
							output_6.addEventListener("click", onOutputClick);
						}
						container.addChild(output_6, {
							"colIndex": 6,
							"rowIndex": 0
						});
						var output_7 = new cpr.controls.Output();
						output_7.value = "";
						output_7.style.css({
							"color" : "white",
							"font-weight" : "bold",
							"font-size" : "10px",
							"text-align" : "center"
						});
						if(typeof onOutputClick == "function") {
							output_7.addEventListener("click", onOutputClick);
						}
						container.addChild(output_7, {
							"colIndex": 7,
							"rowIndex": 0
						});
						var output_8 = new cpr.controls.Output();
						output_8.value = "";
						output_8.style.css({
							"color" : "white",
							"font-weight" : "bold",
							"font-size" : "10px",
							"text-align" : "center"
						});
						if(typeof onOutputClick == "function") {
							output_8.addEventListener("click", onOutputClick);
						}
						container.addChild(output_8, {
							"colIndex": 8,
							"rowIndex": 0
						});
						var output_9 = new cpr.controls.Output();
						output_9.value = "";
						output_9.style.css({
							"color" : "white",
							"font-weight" : "bold",
							"font-size" : "10px",
							"text-align" : "center"
						});
						if(typeof onOutputClick == "function") {
							output_9.addEventListener("click", onOutputClick);
						}
						container.addChild(output_9, {
							"colIndex": 9,
							"rowIndex": 0
						});
						var output_10 = new cpr.controls.Output();
						output_10.value = "";
						output_10.style.css({
							"font-weight" : "bold",
							"font-size" : "10px",
							"text-align" : "center"
						});
						if(typeof onOutputClick == "function") {
							output_10.addEventListener("click", onOutputClick);
						}
						container.addChild(output_10, {
							"colIndex": 10,
							"rowIndex": 0
						});
						var output_11 = new cpr.controls.Output();
						output_11.value = "";
						output_11.style.css({
							"color" : "white",
							"font-weight" : "bold",
							"font-size" : "10px",
							"text-align" : "center"
						});
						if(typeof onOutputClick == "function") {
							output_11.addEventListener("click", onOutputClick);
						}
						container.addChild(output_11, {
							"colIndex": 11,
							"rowIndex": 0
						});
						var output_12 = new cpr.controls.Output();
						output_12.value = "";
						output_12.style.css({
							"color" : "white",
							"font-weight" : "bold",
							"font-size" : "10px",
							"text-align" : "center"
						});
						if(typeof onOutputClick == "function") {
							output_12.addEventListener("click", onOutputClick);
						}
						container.addChild(output_12, {
							"colIndex": 12,
							"rowIndex": 0
						});
						var output_13 = new cpr.controls.Output();
						output_13.value = "";
						output_13.style.css({
							"color" : "white",
							"font-weight" : "bold",
							"font-size" : "10px",
							"text-align" : "center"
						});
						if(typeof onOutputClick == "function") {
							output_13.addEventListener("click", onOutputClick);
						}
						container.addChild(output_13, {
							"colIndex": 13,
							"rowIndex": 0
						});
						var output_14 = new cpr.controls.Output();
						output_14.value = "";
						output_14.style.css({
							"color" : "white",
							"font-weight" : "bold",
							"font-size" : "10px",
							"text-align" : "center"
						});
						if(typeof onOutputClick == "function") {
							output_14.addEventListener("click", onOutputClick);
						}
						container.addChild(output_14, {
							"colIndex": 14,
							"rowIndex": 0
						});
						var output_15 = new cpr.controls.Output();
						output_15.value = "";
						output_15.style.css({
							"font-weight" : "bold",
							"font-size" : "10px",
							"text-align" : "center"
						});
						if(typeof onOutputClick == "function") {
							output_15.addEventListener("click", onOutputClick);
						}
						container.addChild(output_15, {
							"colIndex": 15,
							"rowIndex": 0
						});
						var output_16 = new cpr.controls.Output();
						output_16.value = "";
						output_16.style.css({
							"font-weight" : "bold",
							"font-size" : "10px",
							"text-align" : "center"
						});
						if(typeof onOutputClick == "function") {
							output_16.addEventListener("click", onOutputClick);
						}
						container.addChild(output_16, {
							"colIndex": 1,
							"rowIndex": 0
						});
					})(group_4);
					container.addChild(group_4, {
						"colIndex": 0,
						"rowIndex": 0
					});
					var grid_1 = new cpr.controls.Grid("grd1");
					grid_1.readOnly = false;
					grid_1.init({
						"dataSet": app.lookup("ds_colorTable"),
						"columnMovable": false,
						"selectionUnit": "cell",
						"resizableColumns": "none",
						"columns": [
							{"width": "50px"},
							{"width": "50px"},
							{"width": "50px"},
							{"width": "50px"}
						],
						"header": {
							"rows": [{"height": "0"}],
							"cells": [
								{
									"constraint": {"rowIndex": 0, "colIndex": 0},
									"configurator": function(cell){
										cell.targetColumnName = "color1";
										cell.filterable = false;
										cell.sortable = false;
										cell.text = "color1";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 1},
									"configurator": function(cell){
										cell.targetColumnName = "color2";
										cell.filterable = false;
										cell.sortable = false;
										cell.text = "color2";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 2},
									"configurator": function(cell){
										cell.targetColumnName = "color3";
										cell.filterable = false;
										cell.sortable = false;
										cell.text = "color3";
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 3},
									"configurator": function(cell){
										cell.targetColumnName = "color4";
										cell.filterable = false;
										cell.sortable = false;
										cell.text = "color4";
									}
								}
							]
						},
						"detail": {
							"rows": [{"height": "24px"}],
							"cells": [
								{
									"constraint": {"rowIndex": 0, "colIndex": 0},
									"configurator": function(cell){
										cell.columnName = "color1";
										cell.style.css({
											"text-align" : "center"
										});
										cell.control = (function(){
											var output_17 = new cpr.controls.Output();
											output_17.value = "Output";
											output_17.style.css({
												"text-align" : "center"
											});
											output_17.style.bind("backgroundColor").toDataColumn("color1");
											output_17.bind("value").toDataColumn("color1");
											return output_17;
										})();
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 1},
									"configurator": function(cell){
										cell.columnName = "color2";
										cell.control = (function(){
											var output_18 = new cpr.controls.Output();
											output_18.value = "Output";
											output_18.style.css({
												"text-align" : "center"
											});
											output_18.style.bind("backgroundColor").toDataColumn("color2");
											output_18.bind("value").toDataColumn("color2");
											return output_18;
										})();
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 2},
									"configurator": function(cell){
										cell.columnName = "color3";
										cell.style.css({
											"text-align" : "center"
										});
										cell.control = (function(){
											var output_19 = new cpr.controls.Output();
											output_19.value = "Output";
											output_19.style.css({
												"text-align" : "center"
											});
											output_19.style.bind("backgroundColor").toDataColumn("color3");
											output_19.bind("value").toDataColumn("color3");
											return output_19;
										})();
									}
								},
								{
									"constraint": {"rowIndex": 0, "colIndex": 3},
									"configurator": function(cell){
										cell.columnName = "color4";
										cell.style.css({
											"text-align" : "center"
										});
										cell.control = (function(){
											var output_20 = new cpr.controls.Output();
											output_20.value = "Output";
											output_20.style.css({
												"text-align" : "center"
											});
											output_20.style.bind("backgroundColor").toDataColumn("color4");
											output_20.bind("value").toDataColumn("color4");
											return output_20;
										})();
									}
								}
							]
						}
					});
					grid_1.style.css({
						"border-right-style" : "solid",
						"border-top-width" : "1px",
						"border-bottom-color" : "black",
						"border-right-width" : "1px",
						"border-left-style" : "solid",
						"border-bottom-width" : "1px",
						"border-left-color" : "black",
						"border-top-color" : "black",
						"border-bottom-style" : "solid",
						"border-right-color" : "black",
						"border-left-width" : "1px",
						"border-top-style" : "solid"
					});
					if(typeof onGrd1CellClick == "function") {
						grid_1.addEventListener("cell-click", onGrd1CellClick);
					}
					if(typeof onGrd1Dblclick == "function") {
						grid_1.addEventListener("dblclick", onGrd1Dblclick);
					}
					container.addChild(grid_1, {
						"colIndex": 0,
						"rowIndex": 1
					});
					var group_5 = new cpr.controls.Container("grp3");
					// Layout
					var formLayout_4 = new cpr.controls.layouts.FormLayout();
					formLayout_4.topMargin = "5px";
					formLayout_4.rightMargin = "5px";
					formLayout_4.bottomMargin = "5px";
					formLayout_4.leftMargin = "5px";
					formLayout_4.horizontalSpacing = "5px";
					formLayout_4.verticalSpacing = "5px";
					formLayout_4.setColumns(["60px", "1fr", "60px"]);
					formLayout_4.setRows(["25px"]);
					group_5.setLayout(formLayout_4);
					(function(container){
						var button_1 = new cpr.controls.Button("btnClose");
						button_1.value = "화면닫기";
						if(typeof onBtnCloseClick == "function") {
							button_1.addEventListener("click", onBtnCloseClick);
						}
						container.addChild(button_1, {
							"colIndex": 0,
							"rowIndex": 0
						});
						var button_2 = new cpr.controls.Button("btnSelect");
						button_2.value = "선택닫기";
						if(typeof onBtnSelectClick == "function") {
							button_2.addEventListener("click", onBtnSelectClick);
						}
						container.addChild(button_2, {
							"colIndex": 2,
							"rowIndex": 0
						});
					})(group_5);
					container.addChild(group_5, {
						"colIndex": 0,
						"rowIndex": 2
					});
				})(group_3);
				container.addChild(group_3, {
					"colIndex": 0,
					"rowIndex": 1,
					"colSpan": 1,
					"rowSpan": 1
				});
			})(group_2);
			container.addChild(group_2, {
				"width": "1024px",
				"height": "510px"
			});
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
			// Linking
			linker.userDefinedControl_2.ctrl = linker.group_3;
		}
	});
	app.title = "색상표 팝업";
	cpr.core.Platform.INSTANCE.register(app);
})();
