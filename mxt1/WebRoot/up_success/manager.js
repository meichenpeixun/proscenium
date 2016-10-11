
var mg = {
	source: null,
	qwindow: null,
	videoids: null,
	videoidsE: null,
	v_m_p:null,
	init: function() {
		var YK_Manage = $$('[_uc="mg"]')[0];
		if(!YK_Manage) return;
		Event.observe(YK_Manage, 'click', this.handler_event.bind(this));
		this.edit_initV2();
		this.list_init();
		this.parsev();
		this.edit_playlist_init();
		this.playlist_init();
		this.annotate_init();
		this.giftOpen_init();
		this.ucindex_init();
	},
	uploadQ:function(){
		if(!this.qwindow)this.qwindow = this._createwin();

		this.qwindow
			.setSize(700,500)
			.setContent("html", jQuery('#contimg').html().replace('id="a"','id="videoImg"').replace('id="b"','id="imgView"').replace('id="c"','id="imgPane"').replace('id="d"','id="imgSave"'))
			.showHandle()
			.show();
		this.qwindow.showMask();
		videoImg.init();
	},
	giftOpen_init:function(){
		if($('giftButton')){
			var isOpen = $('giftButton').readAttribute('_value');
			$('giftButton').onclick = function(){
				$('ewarning').hide();
				nova_request(function(res) {
					if(res==1){
						window.history.go(0);
					}else{
						$('ewarning').show();
					}
				}.bind(this), '/u/gift/fun/giftController',{'isOpen':isOpen}, 'post');
			}.bind(this);
		}
	},
	annotate_init:function(){
		if(typeof $$('[_ucpage="annotate"]')[0] == 'undefined')return;
		this.notesLength = 10;
		this.noteCurrent = null;
		this.isvaluechange = 0;
		this.isvalueedit = 0;
		this.is_open = 1;
		var notesList = $('timeline').select('[_nt="data"]');
		if(notesList.length >= this.notesLength){
			$('noteadd').style.display = 'none';
		}else{
			$('noteadd').style.display = 'block';
		}

		window.onbeforeunload = function(e){
			if(this.isvalueedit == 1){
				if(Prototype.Browser.IE){
					return "您有一条编辑中的注释尚未确定，是否丢弃？";
				}else{
					e.returnValue="您有一条编辑中的注释尚未确定，是否丢弃？";
					return "您有一条编辑中的注释尚未确定，是否丢弃？";
				}
			}
			if(this.isvaluechange == 1){
				if(Prototype.Browser.IE){
					return "当前内容尚未保存，是否放弃？";
				}else{
					e.returnValue="当前内容尚未保存，是否放弃？";
					return "当前内容尚未保存，是否放弃？";
				}
			}
		}.bind(this);

	},
	json2str: function(o) {
		var arr = [];
		var fmt = function(s) {
			if (typeof s == 'object' && s != null) return json2str(s);
			//return /^(string|number)$/.test(typeof s) ? "'" + s + "'" : s;
			return /^(string)$/.test(typeof s) ? "'" + s + "'" : s;
		}
		for (var i in o) arr.push("'" + i + "':" + fmt(o[i]));
		return '{' + arr.join(',') + '}';
	},
	time_format: function(seconds,rHour){
		var hour=0,minute=0,second=seconds%60;
		var rHour = rHour||true;
		if(rHour){
			if(seconds>=3600){
				hour=Math.floor(seconds/3600);
			}
			minute=Math.floor((seconds%3600)/60);
		}else{
			minute=Math.floor(seconds/60);
		}
		if(hour<10)hour = '0'+ hour;
		if(minute<10)minute = '0'+ minute;
		if(second<10)second = '0'+ second;
		return hour + ':' + minute + ':' +second;
	},
	re_time_format: function(t) {
		if (!this.annotate_ctime(t))return 0;
		var tt = t.split(/:/i);
		var seconds =0,second=parseInt(tt[2],10),minute=parseInt(tt[1],10),hour=parseInt(tt[0],10);
		seconds = hour*3600 + minute*60 + second
		return seconds;
	},
	annotate_add: function(type){
		if(!this.annotate_isvalueedit())return false;
		this.isvalueedit = 1;
		this.is_open = 1;
		this.noteCurrent = null;
		this.noteCurrent_sort = null;
		this.noteCurrentData = null;
		type = type||1;
		var noteadd = $('noteadd'),noteedit = $('noteedit');
		noteadd.insert({before: noteedit});
		var lastE,notesList = $('timeline').select('[_nt="data"]');
		if(notesList.length>0)lastE = notesList[notesList.length-1];

		if(lastE == undefined){
			$('in_start').value =  this.noteCurrent_in_start =  mg.time_format(0);
			if(NoteSeconds >= 5){
				$('in_end').value =  this.noteCurrent_in_end =  mg.time_format(5);
			}else{
				$('in_end').value =  this.noteCurrent_in_end =  mg.time_format(NoteSeconds);
			}
			noteedit.down('.timepoint').innerHTML = this.noteCurrent_in_start;
		}else{
			var data = lastE.readAttribute('data');
			data = (decodeURIComponent(data)).evalJSON(1);
			if(NoteSeconds <= data.end+1){
				$('in_start').value =  this.noteCurrent_in_start = mg.time_format(NoteSeconds);
			}else{
				$('in_start').value =  this.noteCurrent_in_start = mg.time_format(data.end+1);
			}
			if(NoteSeconds <= data.end+6){
				$('in_end').value =  this.noteCurrent_in_end =  mg.time_format(NoteSeconds);
			}else{
				$('in_end').value =  this.noteCurrent_in_end =  mg.time_format(data.end+6);
			}
			noteedit.down('.timepoint').innerHTML = this.noteCurrent_in_start;
		}
		if(type == 2){
			this.noteCurrentType = 2;
			noteedit.down('h3').innerHTML = '添加频道推广';
			$('noteedit_mapbox').down('h3').innerHTML = '频道推广示意图';
			$('noteedit_text').style.display = 'none';
			$('noteedit_showtext').style.display = 'none';
			$('noteedit_showpic').style.display = 'block';
		}else{
			this.noteCurrentType = 1;
			noteedit.down('h3').innerHTML = '添加文字注释';
			$('noteedit_mapbox').down('h3').innerHTML = '文字注释示意图';
			$('noteedit_text').style.display = 'block';
			$('in_pos_left').checked = true;
			$('noteedit_showtext').writeAttribute('class','possketch');
			$('noteedit_showtext').style.display = 'block';
			$('noteedit_showpic').style.display = 'none';
			$('in_text').value = '';
			$('in_href').value = '';
		}

		var notesList = $('timeline').select('[_nt="data"]');
		if(notesList.length >= this.notesLength-1){
			$('noteadd').style.display = 'none';
		}else{
			$('noteadd').style.display = 'block';
		}
		noteedit.style.display = 'block';
	},
	annotate_edit: function(o){
		if(!this.annotate_isvalueedit())return false;
		this.is_open = 1;
		this.isvalueedit = 1;
		var noteE = $(o).up('[_nt="data"]');
		this.noteCurrent = noteE;
		var aa = noteE.previousSiblings(),previous=aa.length,edit_ok = $('edit_ok');

		edit_ok.innerHTML = '<span class="form_btn_text" onclick="hz.postHz(4008738, 1000529);mg.annotate_addOk();">确&#12288;定</span>';
		edit_ok.removeClassName('form_btn_disabled');

		if(aa.length>0){
			aa.each(function(o){
				if(o.id == 'timebegin' || o.id == 'noteedit'){
					previous--;
				}
			}.bind(this));
		}
		this.noteCurrent_sort = previous+1;


		var data = noteE.readAttribute('data');
		data = (decodeURIComponent(data)).evalJSON(1);
		this.noteCurrentData = data;
		var noteedit = $('noteedit');
		noteE.insert({after: noteedit});
		$('in_start').value = this.noteCurrent_in_start = mg.time_format(data.start);
		$('in_end').value = this.noteCurrent_in_end = mg.time_format(data.end);
		noteedit.down('.timepoint').innerHTML = this.noteCurrent_in_start;
		if(data.type == 2){
			this.noteCurrentType = 2;
			$('noteedit_text').style.display = 'none';
			$('noteedit_showtext').style.display = 'none';
			$('noteedit_showpic').style.display = 'block';
			noteedit.down('h3').innerHTML = '编辑频道推广';
			$('noteedit_mapbox').down('h3').innerHTML = '频道推广示意图';

		}else{
			this.noteCurrentType = 1;
			noteedit.down('h3').innerHTML = '编辑文字注释';
			$('noteedit_mapbox').down('h3').innerHTML = '文字注释示意图';
			$('noteedit_text').style.display = 'block';
			//$('in_pos_left').checked = true;
			//$('noteedit_showtext').writeAttribute('class','possketch');
			$('noteedit_showtext').style.display = 'block';
			$('noteedit_showpic').style.display = 'none';
			$('in_text').value = data.text;
			$('in_href').value = data.href;
			$('in_pos_'+data.pos).checked = true;
			this.annotate_selectpos();
		}
		noteedit.style.display = 'block';
		$('YK_manager_tips').insert({top: this.noteCurrent});
		//this.noteCurrent.style.display = 'none';
	},
	annotate_delete: function(o){
		if(!this.annotate_isvalueedit())return false;
		if(!this.qwindow)this.qwindow = this._createwin();
		this.qwindow
			.setSize(240,105)
			.setContent("html", document.getElementById("cont1").innerHTML)
			.showHandle()
			.show();
		this.qwindow.showMask();
		this.qwindow.setSize(240,105);
		$(this.qwindow.dom.winbody).down('.tips_title').innerHTML = '<span class="ico__fail"><em>提示</em></span>您确定要删除此注释么？';
		this.noteCurrent = $(o).up('[_nt="data"]');
	},
	annotate_isvalueedit: function(){
		//display save status
		$('success_top').style.display = 'none';
		$('success_bottom').style.display = 'none';
		$('lost_top').style.display = 'none';
		$('lost_bottom').style.display = 'none';
		if(this.isvalueedit == 1){
			if(!this.qwindow)this.qwindow = this._createwin();
			this.qwindow
				.setSize(240,120)
				.setContent("html", document.getElementById("cont2").innerHTML)
				.showHandle()
				.show();
			this.qwindow.showMask();
			this.qwindow.setSize(240,120);
			$(this.qwindow.dom.winbody).down('.tips_title').innerHTML = '<span class="ico__fail"><em>提示</em></span>您有一条编辑中的注释尚未确定，是否丢弃？';
			return false;
		}else{
			return true;
		}
	},
	annotate_dropedit:function(type){
		if(type == 1){
			this.annotate_addCancel();
			this.isvalueedit = 0;
		}else{
			this.isvalueedit = 1;
			$('in_start').focus();
		}
		if(this.qwindow)this.qwindow.hide();
	},
	annotate_delete_ok: function(){
		if(this.qwindow)this.qwindow.hide();
		if(this.noteCurrent)this.noteCurrent.remove();
		this.isvaluechange = 1;
		var notesList = $('timeline').select('[_nt="data"]'),noteadd = $('noteadd');
		$('commentinfo').down('h2').innerHTML = '创收设置(' + notesList.length + ')';

		if(notesList.length >= this.notesLength){
			noteadd.style.display = 'none';
		}else{
			noteadd.style.display = 'block';
			if(notesList.length == 0){
				$('timebegin').style.display = 'block';
				$('noteadd').down('.timepoint').innerHTML = mg.time_format(0);
			}else{
				var noteBegin = notesList[0],noteEnd = notesList[notesList.length-1];
				var noteBeginData = noteBegin.readAttribute('data'),noteEndData = noteEnd.readAttribute('data');
				noteBeginData = (decodeURIComponent(noteBeginData)).evalJSON(1);
				noteEndData = (decodeURIComponent(noteEndData)).evalJSON(1);
				if(noteBeginData.start <= 0){
					$('timebegin').style.display = 'none';
				}else{
					$('timebegin').style.display = 'block';
				}
				if(noteEndData.end+1 > NoteSeconds){
					$('noteadd').down('.timepoint').innerHTML = mg.time_format(NoteSeconds);
				}else{
					$('noteadd').down('.timepoint').innerHTML = mg.time_format(noteEndData.end+1);
				}
			}
		}
	},
	_alertNote: function(ele){
		if(ele.eleid)$(ele.eleid).addClassName('form_input_error');
		//$(ele.errpos).insert({after: $('input_error')});
		$('input_error').style.display = 'block';
		$('input_error').innerHTML = '<i class="ico__error"></i>' + ele.msg;
		$(ele.eclick).onclick = function(o){
			$(ele.eleid).removeClassName('form_input_error');
			$('input_error').style.display = 'none';
		}
		$(ele.efocus).onfocus = function(o){
			$(ele.eleid).removeClassName('form_input_error');
			$('input_error').style.display = 'none';
		}

		if(Prototype.Browser.IE == true){
			var e =  window.event;
			Event.stop(e);
			//console.log('test11');
		}else{
			//console.log('test22');
		}
	},
	_alertTrad: function(ele){
		if(ele.eleid)$(ele.eleid).addClassName('form_input_error');
		//$(ele.errpos).insert({after: $('input_error_trad')});
		$('input_error_trad').style.display = 'block';
		$('input_error_trad').innerHTML = '<i class="ico__error"></i>' + ele.msg;
		$(ele.eclick).onclick = function(o){
			$(ele.eleid).removeClassName('form_input_error');
			$('input_error_trad').style.display = 'none';
		}
		$(ele.efocus).onfocus = function(o){
			$(ele.eleid).removeClassName('form_input_error');
			$('input_error_trad').style.display = 'none';
		}
	},
	annotate_addOk: function(){
		this.isvaluechange = 1;
		if(!this.noteCurrentType){
			alert('加载错误，请刷新后重试！');
		}
		if(this.is_open != 1){
			mg._alertNote({"eleid":"in_text","errpos":$("in_text").up(),"eclick":"in_text","efocus":"in_text","msg":"服务器无响应，请取消重试"});return;
		}
		//时间格式检查
		var in_start = $('in_start').value;
		if (!this.annotate_ctime(in_start)) {
			mg._alertNote({"eleid":"in_start","errpos":$("in_start").up(),"eclick":"in_start","efocus":"in_start","msg":"格式错误"});
			return;
		}
		var in_end = $('in_end').value;
		if (!this.annotate_ctime(in_end)) {
			mg._alertNote({"eleid":"in_end","errpos":$("in_end").up(),"eclick":"in_end","efocus":"in_end","msg":"格式错误"});
			return;
		}

		var fstart = this.re_time_format(in_start);
		var fend = this.re_time_format(in_end);

		if(fstart < 0){
			mg._alertNote({"eleid":"in_start","errpos":$("in_start").up(0),"eclick":"in_start","efocus":"in_start","msg":"开始时间需不小于0秒，请修改"});return;
		}
		if(fend <=0){
			mg._alertNote({"eleid":"in_end","errpos":$("in_end").up(0),"eclick":"in_end","efocus":"in_end","msg":"结束时间需大于0秒，请修改"});return;
		}
		if(fstart >= NoteSeconds){
			mg._alertNote({"eleid":"in_start","errpos":$("in_start").up(0),"eclick":"in_start","efocus":"in_start","msg":"开始时间需小于视频时长，请修改"});return;
		}
		if(fend > NoteSeconds){
			mg._alertNote({"eleid":"in_end","errpos":$("in_end").up(0),"eclick":"in_end","efocus":"in_end","msg":"结束时间需不大于视频时长，请修改"});return;
		}
		if(fstart >= fend){
			mg._alertNote({"eleid":"in_end","errpos":$("in_end").up(0),"eclick":"in_end","efocus":"in_end","msg":"结束时间需大于开始时间，请修改"});return;
		}

		//时间范围检查
		var notesList = $('timeline').select('[_nt="data"]'),tempData,insertPost,tempNum;

		for(var i=0;i<notesList.length;i++){
			//if(this.noteCurrentElePos === i)continue;
			tempData = notesList[i].readAttribute('data');
			tempData = (decodeURIComponent(tempData)).evalJSON(1);

			if(fstart < tempData.start && fend > tempData.end){
				if(this.noteCurrent_sort && this.noteCurrent_sort <= i+1)
					tempNum = i+2;
				else
					tempNum = i+1;
				mg._alertNote({"eleid":"in_start","errpos":$("in_start").up(0),"eclick":"in_start","efocus":"in_start","msg":"与第"+tempNum+"条注释的时间冲突"});
				mg._alertNote({"eleid":"in_end","errpos":$("in_end").up(0),"eclick":"in_end","efocus":"in_end","msg":"与第"+tempNum+"条注释的时间冲突，请修改"});return;
			}
			if(fstart >= tempData.start && fstart < tempData.end){
				if(this.noteCurrent_sort && this.noteCurrent_sort <= i+1)
					tempNum = i+2;
				else
					tempNum = i+1;
				mg._alertNote({"eleid":"in_start","errpos":$("in_start").up(0),"eclick":"in_start","efocus":"in_start","msg":"与第"+tempNum+"条注释的时间冲突，请修改"});return;
			}
			if(fend > tempData.start && fend <= tempData.end){
				if(this.noteCurrent_sort && this.noteCurrent_sort <= i+1)
					tempNum = i+2;
				else
					tempNum = i+1;
				mg._alertNote({"eleid":"in_end","errpos":$("in_end").up(0),"eclick":"in_end","efocus":"in_end","msg":"与第"+tempNum+"条注释的时间冲突，请修改"});return;
			}
			if(fend <= tempData.start){
				insertPost = notesList[i];
				break;
			}

		}

		if(!insertPost){
			insertPost = $("noteadd");
		}

		if(this.noteCurrentType == 2){
			//
		}else{
			this.noteCurrentType = 1;
			//文字解释
			var text,in_text = $('in_text');
			text = trim(in_text.value.replace(/<[^>]*?>/ig, ""));
			in_text.value = text;

			if(text.length == 0){
				mg._alertNote({"eleid":"in_text","errpos":$("in_text").up(),"eclick":"in_text","efocus":"in_text","msg":"文字内容不能为空，请输入内容"});return;
			}
			if(text.length > 15){
				mg._alertNote({"eleid":"in_text","errpos":$("in_text").up(),"eclick":"in_text","efocus":"in_text","msg":"文字内容超过15个字，请修改"});return;
			}

			//链接解释
			var in_href = trim($('in_href').value);
			if(in_href.length > 0){
				var pos = in_href.search(/[^.]+\.com/);
				if(pos!=-1){
					var arr = in_href.match(/([^.]+)\.com/);
					if(arr[1]!='youku' &&  arr[1]!='soku' &&  arr[1]!='tudou'){
						mg._alertNote({"eleid":"in_href","errpos":$("in_href").up(),"eclick":"in_href","efocus":"in_href","msg":"仅支持优酷、土豆网、搜库链接，请修改"});
						return;
					}
				}
				if(!in_href.match(/^http:\/\/[a-zA-Z0-9\.-]+\.([a-zA-Z]{2,4})(:\\d+)?(\/[a-zA-Z0-9-_@#%&\?\.=\/]*)?$/)){
					mg._alertNote({"eleid":"in_href","errpos":$("in_href").up(),"eclick":"in_href","efocus":"in_href","msg":"仅支持优酷、土豆网、搜库链接，请修改"});return;
				}

				if (! (in_href.match(/http:\/\/[^.]+\.((youku)|(soku)|(tudou))\.com\/?.*$/i) || in_href.match(/http:\/\/[^.]+?\.((youku)|(soku)|(tudou))\.com\/[^.]+(\.html|\.htm|\.php)/i))) {
					mg._alertNote({"eleid":"in_href","errpos":$("in_href").up(),"eclick":"in_href","efocus":"in_href","msg":"仅支持优酷、土豆网、搜库链接，请修改"});return;
				}

			}
			if(in_href.length > 255){
				mg._alertNote({"eleid":"in_href","errpos":$("in_href").up(),"eclick":"in_href","efocus":"in_href","msg":"最多255个字"});return;
			}
		}

		this.render_html = function(){
			//整理data
			var data = {};
			data.type = this.noteCurrentType;
			data.start = this.re_time_format(in_start);
			data.end = this.re_time_format(in_end);

			if(data.type == 1){
				data.text = text;
				data.href = in_href;

				var pos = document.getElementsByName('in_pos');
				if(pos[0].checked == true){
					data.pos = 'left';
				}else if(pos[1].checked == true){
					data.pos = 'center';
				}else if(pos[2].checked == true){
					data.pos = 'right';
				}else{
					data.pos = 'left';
				}
			}

			data.dataString = encodeURIComponent(JSON.stringify(data));
			data.startFormat = in_start;
			data.endFormat = in_end;

			//赋值到页面
			YKUC.render(function(html) {
				this.isvalueedit = 0;
				var tdiv = document.createElement( "div" );
				$(tdiv).writeAttribute('class','eventpoint ep_tips');
				$(tdiv).writeAttribute('_nt','data');
				$(tdiv).writeAttribute('data',data.dataString);

				tdiv.innerHTML = html;
				$(insertPost).insert({before: tdiv});
				if(this.noteCurrent){
					this.noteCurrent.remove();
				}
				$('noteedit').style.display='none';
				var notesList = $('timeline').select('[_nt="data"]');
				$('commentinfo').down('h2').innerHTML = '创收设置(' + notesList.length + ')';

				if(notesList.length >= this.notesLength){
					$('noteadd').style.display = 'none';
				}else{
					$('noteadd').style.display = 'block';
				}
				var noteBegin = notesList[0],noteEnd = notesList[notesList.length-1];
				var noteBeginData = noteBegin.readAttribute('data'),noteEndData = noteEnd.readAttribute('data');
				noteBeginData = (decodeURIComponent(noteBeginData)).evalJSON(1);
				noteEndData = (decodeURIComponent(noteEndData)).evalJSON(1);
				if(noteBeginData.start <= 0){
					$('timebegin').style.display = 'none';
				}else{
					$('timebegin').style.display = 'block';
				}
				if(noteEndData.end+1 > NoteSeconds){
					$('noteadd').down('.timepoint').innerHTML = mg.time_format(NoteSeconds);
				}else{
					$('noteadd').down('.timepoint').innerHTML = mg.time_format(noteEndData.end+1);
				}
			}.bind(this),{element: annotate_show_tpl, type: '<'},{'note':data});
		}.bind(this);


		if(this.noteCurrentType == 1){
			var edit_ok = $('edit_ok'),is_get_res = null;
			edit_ok.innerHTML = '<div style="width: 58px; height: 22px;"><span class=" ico__loading_16 "></span></div>';
			edit_ok.addClassName('form_btn_disabled');
			this.is_open = 1;
			nova_request(function(res) {
				is_get_res = res;
				if(this.is_open != 1){
					mg._alertNote({"eleid":"in_text","errpos":$("in_text").up(),"eclick":"in_text","efocus":"in_text","msg":"服务器无响应，请取消重试"});return;
				}else if(res != 1){
					edit_ok.innerHTML = '<span class="form_btn_text" onclick="hz.postHz(4008738, 1000529);mg.annotate_addOk();">确&#12288;定</span>';
					edit_ok.removeClassName('form_btn_disabled');
					mg._alertNote({"eleid":"in_text","errpos":$("in_text").up(),"eclick":"in_text","efocus":"in_text","msg":"文字内容含有禁忌词，请修改"});return;
				}else{
					edit_ok.innerHTML = '<span class="form_btn_text" onclick="hz.postHz(4008738, 1000529);mg.annotate_addOk();">确&#12288;定</span>';
					edit_ok.removeClassName('form_btn_disabled');
					this.render_html();
				}
			}.bind(this), '/u/videos/filter', {"text":text}, 'post');
			setTimeout(function(){
				if(!is_get_res){
					this.is_open = 0;
					mg._alertNote({"eleid":"in_text","errpos":$("in_text").up(),"eclick":"in_text","efocus":"in_text","msg":"服务器无响应，请取消重试"});return;
				}else{
					edit_ok.innerHTML = '<span class="form_btn_text" onclick="hz.postHz(4008738, 1000529);mg.annotate_addOk();">确&#12288;定</span>';
					edit_ok.removeClassName('form_btn_disabled');
					is_get_res = null;
				}
			}.bind(this), 60000);
		}else{
			this.render_html();
		}
	},
	annotate_hrefcheck: function(){
		var in_href = trim($('in_href').value);
		if(in_href.length > 0){
			if (in_href.match(/http:\/\/((youku)|(soku)|(tudou))\.com/i)) {
				in_href = in_href.replace(/http:\/\//ig, "http://www.");
			}else if(in_href.match(/^((youku)|(soku)|(tudou))\.com/i)) {
				in_href = 'http://www.'+ in_href;
			}else if(!in_href.match(/^http:\/\//i)) {
				in_href = 'http://'+ in_href;
			}
			$('in_href').value = in_href;
		}
	},
	annotate_addCancel: function(){
		this.isvalueedit = 0;
		var noteadd = $('noteadd');
		var noteedit = $('noteedit');
		if(this.noteCurrent){
			this.noteCurrent.style.display = 'block';
			noteedit.insert({before: this.noteCurrent});
		}

		$('input_error').style.display = 'none';
		$('in_start').removeClassName('form_input_error');
		$('in_end').removeClassName('form_input_error');
		$('in_text').removeClassName('form_input_error');
		$('in_href').removeClassName('form_input_error');
		$('noteedit').style.display = 'none';

		var notesList = $('timeline').select('[_nt="data"]');
		if(notesList.length >= this.notesLength){
			noteadd.style.display = 'none';
		}else{
			noteadd.style.display = 'block';
		}
	},
	annotate_selectpos: function(){
		var pos = document.getElementsByName('in_pos');
		if(pos[0].checked == true){
			$('noteedit_showtext').writeAttribute('class','possketch');
		}else if(pos[1].checked == true){
			$('noteedit_showtext').writeAttribute('class','possketch possketch_center');
		}else if(pos[2].checked == true){
			$('noteedit_showtext').writeAttribute('class','possketch possketch_right');
		}else{
			pos[0].checked = true;
			$('noteedit_showtext').writeAttribute('class','possketch');
		}
	},
	annotate_cancel: function(){
		if(!this.annotate_isvalueedit())return false;
		window.opener=null;
		window.open('', '_self', '');
		window.close();
	},
	preventDefault: function(evt){
		var evt = window.event || evt;
		if(evt.preventDefault){
			evt.preventDefault();
		}else{
			event.returnValue = false;
		}
		return false;
	},
	annotate_submit: function(){
		if(!islogin()) {
			login(function() {window.location.reload()});
			return;
		}
		if(!this.annotate_isvalueedit())return false;
		var notesList = $$('[_nt="data"]'),data=[],postdata,submit_top = $('submit_top'),submit_bottom = $('submit_bottom');
		if(notesList.length>0){
			for(var i=0;i<notesList.length;i++){
				tempData = notesList[i].readAttribute('data');
				data[i] = tempData;
			}
			postdata = {'data[]':data};
		}else{
			postdata = {'del':1};
		}

		submit_top.innerHTML = '<span class="ico__loading_16"></span>';
		submit_bottom.innerHTML = '<span class="ico__loading_16"></span>';
		submit_top.addClassName('form_btn_disabled');
		submit_bottom.addClassName('form_btn_disabled');

		nova_request(function(res) {
			submit_top.innerHTML = '<span onclick="mg.annotate_submit();" class="form_btn_text">保&#12288;存</span>';
			submit_bottom.innerHTML = '<span onclick="mg.annotate_submit();" class="form_btn_text">保&#12288;存</span>';
			submit_top.removeClassName('form_btn_disabled');
			submit_bottom.removeClassName('form_btn_disabled');
			if(res == 1){
				this.isvaluechange = 0;
				$('success_top').style.display = 'inline-block';
				$('success_bottom').style.display = 'inline-block';
			}else{
				$('lost_top').style.display = 'inline';
				$('lost_bottom').style.display = 'inline';
			}
		}.bind(this), '/u/videos/asave/id_' + NoteEnVid + '.html', postdata, 'post');

		setTimeout(function(){
			submit_top.innerHTML = '<span onclick="mg.annotate_submit();" class="form_btn_text">保&#12288;存</span>';
			submit_bottom.innerHTML = '<span onclick="mg.annotate_submit();" class="form_btn_text">保&#12288;存</span>';
			submit_top.removeClassName('form_btn_disabled');
			submit_bottom.removeClassName('form_btn_disabled');
		}.bind(this), 5000);

	},
	annotate_timecheck: function(o){
		var t = o.value;
		if (this.annotate_ctime(t)) {
			//alert("正确");
		} else {
			//mg._alert('错误','获得分类信息失败！','v_catepannel',{"pos":"cate_err","ele":"v_catepannel","eclick":"v_catepannel"});
			return;
		}
	},
	annotate_ctime: function(t){
		var timeReg = /^[0-9]{2}:[0-5][0-9]:[0-5][0-9]$/i;
		if (t.match(timeReg)) {
			return true;
		} else {
			return false;
		}
	},
	annotate_ctime_back: function(type){
		var noteedit = $('noteedit'),in_start = $('in_start'),in_end = $('in_end');

		if(type == 'start'){
			in_start.value = autoFormate(in_start.value);
			if(!this.noteCurrent_in_start){
				this.noteCurrent_in_start = mg.time_format(0);
			}
			if (!this.annotate_ctime(in_start.value)) {
				in_start.value = this.noteCurrent_in_start;
			}else{
				noteedit.down('.timepoint').innerHTML = in_start.value;
			}
		}else if(type == 'end'){
			in_end.value = autoFormate(in_end.value);
			if(!this.noteCurrent_in_end){
				this.noteCurrent_in_end = mg.time_format(5);
			}
			if (!this.annotate_ctime(in_end.value)) {
				in_end.value = this.noteCurrent_in_end;
			}else{

			}
		}

		function autoFormate(v){
			if (v.match(/^[0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2}$/i)) {
				var arrValue = v.split(/:/i);
				arrValue[0] = parseInt(arrValue[0],10);
				arrValue[1] = parseInt(arrValue[1],10);
				arrValue[2] = parseInt(arrValue[2],10);
				if(arrValue[0]<10)arrValue[0] = '0'+ arrValue[0];
				if(arrValue[1]<10)arrValue[1] = '0'+ arrValue[1];
				if(arrValue[2]<10)arrValue[2] = '0'+ arrValue[2];
				v = arrValue[0] + ':' + arrValue[1] + ':' + arrValue[2];
			}
			return v;
		}
	},
	annotate_arrowinput: function(el,e){
		var e = e || window.event;
		var code = e.charCode||e.keyCode;
		var t;
		if(code >= 37 && code <= 40){
			if(code == 38 || code == 39){
				t = this.re_time_format(el.value);
				t = (t+1)> NoteSeconds ? NoteSeconds : t+1;
				el.value = mg.time_format(t);
			}else{
				t = this.re_time_format(el.value);
				t = (t-1)< 0 ? 0 : t-1;
				el.value = mg.time_format(t);
			}
		}
	},
	edit_playlist_init: function(){
		if(typeof $$('[_ucpage="editplaylist"]')[0] == 'undefined')return;
		var videolist = $('videolist');
		if(!videolist)return;
		videolist.select('.check input').each(function(o){
			o.onclick = function(){
				if(o.checked == true){
					if(videolist.select('.check input:checked').length == videolist.select('.check input').length){
						$('check_all').checked = true;
						$('check_all_foot').checked = true;
					}
					o.up('tr').addClassName('highlight');
				}else{
					o.up('tr').removeClassName('highlight');
					$('check_all').checked = false;
					$('check_all_foot').checked = false;
				}
			};
		}.bind(this));

		videolist.select("td.tpl_serial").each(function(o){
			var down_a = o.down("a"),down_input = o.down("input");
			down_a.onclick = function(){
				down_input.style.display = "block";
				down_input.value = down_a.innerHTML;
				down_a.style.display="none";
				down_input.focus();
				down_input.select();
				try{ if(hz)hz.postHz(4008061,1000707); }catch(e){};
			};

			down_input.onblur = function(){
				var pkfid = down_input.readAttribute('_pkfid');
				mg.setFolderVideoSeq(o,pkfid,down_a.innerHTML,down_input.value);
			}
			down_input.onkeyup = function(e){
				e = e||event;
				if(e.keyCode && e.keyCode == 13){
					var pkfid = down_input.readAttribute('_pkfid');
					mg.setFolderVideoSeq(o,pkfid,down_a.innerHTML,down_input.value);
				}
			}
		}.bind(this));

		videolist.select('tr').each(function(o){
			var share = o.down(".action .share"),del = o.down(".action .del"),add = o.down(".action .add"),mana = o.down(".action .mana");
			var annotate = o.down(".action .annotateedit");
			//if(mana)  mana_a = mana.down("a");
			//if(share)share.style.visibility = 'hidden';
			//if(del)del.style.visibility = 'hidden';
			//if(add)add.style.visibility = 'hidden';
			//if(mana && mana_a)mana.style.visibility = 'hidden';
			o.onmouseover = function(){
				//if(share)share.style.visibility = 'visible';
				if(del)del.style.visibility = 'visible';
				//if(add)add.style.visibility = 'visible';
				if(mana){
					mana.style.visibility = 'visible';
				}
				if(annotate){
					annotate.style.visibility = 'visible';
				}
			};
			o.onmouseout = function(){
				//if(share)share.style.visibility = 'hidden';
				if(del)del.style.visibility = 'hidden';
				if(annotate)annotate.style.visibility = 'hidden';
				//if(add)add.style.visibility = 'hidden';
				if(mana){
					var mana_a = mana.down("a");
					if(mana_a)mana.style.visibility = 'hidden';
				}
			};
		}.bind(this));
	},
	playlist_init: function(){
		if(typeof $$('[_ucpage="playlist"]')[0] == 'undefined')return;
		//share del自动隐藏
		var playlist = $('playlist');
		playlist.select('tr').each(function(o){
			var share = o.down(".action .share"),del = o.down(".action .del"),action = o.down(".action");
			if(share)share.style.display = 'none';
			if(del)del.style.display = 'none';

			o.onmouseover = function(){
				if(share)share.style.display = 'inline-block';
				if(del)del.style.display = 'inline-block';
			};
			o.onmouseout = function(){
				if(share)share.style.display = 'none';
				if(del)del.style.display = 'none';
			};
		}.bind(this));
	},
	moveVideos2Folder: function(o){
		if(!islogin()) {
			login(function() {window.location.reload()});
			return;
		}
		this.source = $(o);
		try{ if(hz)hz.postHz(4008060,1000707); }catch(e){};
		var page = this.source.readAttribute('_p'),videosMaxNum=200,avilableNum=0;
		var sourcePid = $("foldervideos").readAttribute("_fid");
		if(page == 0){
			var videoids='',videolist = $('videolist');
			if(!videolist){
				if(!this.qwindow)this.qwindow = this._createwin();
				this.qwindow
					.setSize(190,60)
					.setContent("html", document.getElementById("cont3").innerHTML)
					.hideHandle()
					.hideMask()
					.show();
				$(this.qwindow.dom.winbody).down('.tips_title').innerHTML = '<span class="ico__fail"><em>提示</em></span>您还没有勾选视频';

				var _timeoutWindow = this.qwindow;
				this.qwindow = null;
				setTimeout(function(){
					_timeoutWindow.hide();
				}.bind(this), 3000);
				return;
			}
			this.videosNum=0;
			videolist.select('.check input').each(function(o){
				if(o.checked == true){
					videoids += o.value + '|';
					++this.videosNum;
				}
			}.bind(this));
			videoids = videoids.replace(/\|$/ig, "");
			if(videoids == ''){
				if(!this.qwindow)this.qwindow = this._createwin();
				this.qwindow
					.setSize(190,60)
					.setContent("html", document.getElementById("cont3").innerHTML)
					.hideHandle()
					.hideMask()
					.show();
				$(this.qwindow.dom.winbody).down('.tips_title').innerHTML = '<span class="ico__fail"><em>提示</em></span>您还没有勾选视频';
				var _timeoutWindow = this.qwindow;
				this.qwindow = null;
				setTimeout(function(){
					_timeoutWindow.hide();
				}.bind(this), 3000);
				return;
			}

			if(!this.PlaylistW)this.PlaylistW= this._createwin();
			this.PlaylistW
				.setSize(650,560)
				.setContent("html", document.getElementById("listEditBox").innerHTML)
				.showHandle();
			this.PlaylistW.submit = function(){
				var playlistids='',l_b_select = $(this.PlaylistW.dom.winbody).down('.l_b_select');
				l_b_select.select('li input').each(function(o){
					if(o.checked == true){
						playlistids += o.value + '|';
					}
				}.bind(this));
				playlistids = playlistids.replace(/\|$/ig, "");
				if(playlistids == ''){
					alert('你没有选择任何播单！');
					return;
				}
				//var sourcePid = $("foldervideos").readAttribute("_fid");
				nova_request(function(res) {
					this.PlaylistW.hide();
					var page = $('foldervideos').down(".manager_tool .pages .current");
					if(page){
						page = page.down("span").innerHTML;
						if(videolist.select('tr').length == this.videosNum)page--;
						page = page <1 ? 1 : page;
						mg.getFolderVideos(page);
					}else{
						mg.getFolderVideos(1);
					}
					mg.updatePlaylistInfo(sourcePid);

					if(!this.qwindow)this.qwindow = this._createwin();
					this.qwindow
						.setSize(175,60)
						.setContent("html", document.getElementById("cont4").innerHTML)
						.hideHandle()
						.hideMask()
						.show();
					$(this.qwindow.dom.winbody).down('.tips_title').innerHTML = '<span class="ico__success"><em>提示</em></span>移动到播单成功';

					var _timeoutWindow = this.qwindow;
					this.qwindow = null;
					setTimeout(function(){
						_timeoutWindow.hide();
					}.bind(this), 3000);
				}.bind(this), '/u/playlists/movevideos2folders', {"vids":videoids,"pids":playlistids,"spid":sourcePid}, 'post');
			}.bind(this);
		}
		if(!page || page < 1)page=1;
		nova_request(function(res) {
			//初始化
			$(this.PlaylistW.dom.winbody).down('.l_b_Pager').innerHTML = res.pager;
			var htmlstr = '',l_b_all = $(this.PlaylistW.dom.winbody).down('.l_b_all'),l_b_select = $(this.PlaylistW.dom.winbody).down('.l_b_select'),l_b_ex = $(this.PlaylistW.dom.winbody).down('.l_b_ex'),l_b_sub = $(this.PlaylistW.dom.winbody).down('.l_b_sub'),disableStr,disableStr2,disableStr3;
			for(var i = 0;i < res.list.length;i++){
				avilableNum = videosMaxNum - res.list[i].contentTotal;
				disableStr = avilableNum >= this.videosNum ? '': ' disable';
				disableStr2 = avilableNum >= this.videosNum ? '': ' disabled';
				disableStr3 = avilableNum >= this.videosNum ? '': ' _num="'+res.list[i].contentTotal+'"';
				if(res.list[i].folderId == sourcePid){
					disableStr = ' disable ';
					disableStr2 = ' disabled ';
					disableStr3 += ' _self="1" ';
				}
				if(i%2 == 0){
					htmlstr +='<li class="odd'+ disableStr +'" '+disableStr3+'><div><input '+disableStr2+' type="checkbox" value="'+ res.list[i].folderId +'"></div><span title="'+res.list[i].folderName+'">'+res.list[i].folderShortName+'<span class="num">('+res.list[i].contentTotal+')</span></span></li>';
				}else{
					htmlstr +='<li class="even'+ disableStr +'" '+disableStr3+'><div><input '+disableStr2+' type="checkbox" value="'+ res.list[i].folderId +'"></div><span title="'+res.list[i].folderName+'">'+res.list[i].folderShortName+'<span class="num">('+res.list[i].contentTotal+')</span></span></li>';
				}
			}
			l_b_ex.innerHTML = '将'+this.videosNum+'个视频移动到播单';
			l_b_all.innerHTML = htmlstr;
			l_b_all.select('li').each(function(o){
				checkint = 0;
				l_b_select.select('li').each(function(o2){
					if(o.down('input').value == o2.down('input').value)checkint = 1;
				}.bind(this));
				if(checkint == 1){
					o.down('input').checked = true;
				}else{
					o.down('input').checked = false;
				}
			}.bind(this));

			//添加事件
			l_b_all.select("li").each(function(o){

				o.down('input').onclick = function(){
					if(o.down('input').checked == true){
						l_b_select.innerHTML = '<li class="odd">'+o.innerHTML+'</li>';
						l_b_select.select("li").each(function(os){os.down('input').checked = true;});
						l_b_all.select("li").each(function(oo){
							if(o.down('input').value != oo.down('input').value){
								oo.addClassName('disable');
								oo.down('input').disabled = true;
							}
						}.bind(this));
					}else{
						l_b_select.innerHTML = '';
						l_b_all.select("li").each(function(oo){
							if(oo.readAttribute('_num') || oo.readAttribute('_self')){
								oo.addClassName('disable');
								oo.down('input').disabled = true;
							}else{
								oo.removeClassName('disable');
								oo.down('input').disabled = false;
							}
						}.bind(this));
					}
					mg._playlist_isdata();
				}
			});

			if(l_b_select.select('li').length > 0){
				l_b_all.select('li').each(function(o){
					if(o.down('input').checked != true){
						o.addClassName('disable');
						o.down('input').disabled = true;
					}
				}.bind(this));
			}
			mg._playlist_isdata();
			this.PlaylistW.show();
		}.bind(this), '/u/playlists/listfolder', {"pl":page}, 'get');
	},
	updatePlaylistInfo: function(folderId){
		if(!folderId)return;
		nova_request(function(res) {
			if(res != -1)$('playlistDetail').innerHTML = res;
		}.bind(this), '/u/playlists/playlistinfo', {"id":folderId}, 'get');
	},
	setFolderVideoSeq: function(flag,id, frompos, topos){
		if(this.isCommitAjax) return;
		// 检查输入序号是否正确
		var checkValid = function(val){
			var length = val.length;
			if(length === 0 || length > 3) return false;
			for(var i=0; i<length; i++){
				var c = val.charCodeAt(i);
				if(0 === i && 48 === c) return false;
				else if (c < 48 || c > 57) return false;
			}
			return true;
		}
		if(!checkValid(topos) || frompos == topos){
			$(flag).down('input').style.display = 'none';
			$(flag).down('a').style.display = 'block';
		}else{
			this.isCommitAjax = true;
			$(flag).down("span").style.display="block";
			$(flag).down('input').style.display = 'none';
			nova_request(function(res) {
				this.isCommitAjax = false;
				if(res == 'ok'){
					var page = $('foldervideos').down(".manager_tool .pages .current"),videolist = $('videolist');
					if(page){
						page = page.down("span").innerHTML;
						page = page <1 ? 1 : page;
						mg.getFolderVideos(page);
					}else{
						mg.getFolderVideos(1);
					}
				}else{
					$(flag).down("span").style.display="none";
					$(flag).down('input').style.display = 'none';
					$(flag).down('a').style.display = 'block';
				}
			}.bind(this), '/u/playlists/setfoldervideodispno', {"cntid":id,"pos":topos}, 'post');
			setTimeout(function(){this.isCommitAjax = false;}.bind(this),3000);
		}
	},
	setFolderLogo: function(event){
		if(!islogin()) {
			login(function() {window.location.reload()});
			return;
		}
		try{ if(hz)hz.postHz(4008064,1000707); }catch(e){};
		this.source = Element.extend(Event.element(event));
		this.source = this.source.up();
		var data = this.source.readAttribute('data'),loading = '<span style="vertical-align: middle; display: block; margin: 0px 23px;" class="ico__loading_16"></span>';;
		data = ('{'+decodeURIComponent(data)+'}').evalJSON(1);
		if(!data.fid || !data.vid )return;
		this.source.innerHTML = loading;
		nova_request(function(res) {
			if(res == 'ok'){
				$("folderLogo").down("img").src = this.source.up("tr").down("img").src;
				$("videolist").select('[_id="setlog"]').each(function(o){
					o.removeClassName("disable");
					o.innerHTML = '<a href="javascript:;" _click="setFolderLogo">设为封面</a>';
					o.style.visibility = "hidden";
				});
				this.source.innerHTML = '当前封面';
				this.source.style.visibility = "visibility";
				this.source.addClassName('disable');
				var temptipsstr = '<span class="ico__success"><em>提示</em></span>设置播单封面成功';
				if(!this.qwindow)this.qwindow = this._createwin();
				this.qwindow
					.setSize(190,60)
					.setContent("html", document.getElementById("cont4").innerHTML)
					.hideHandle()
					.hideMask()
					.show();
				$(this.qwindow.dom.winbody).down('.tips_title').innerHTML = temptipsstr;
				var _timeoutWindow = this.qwindow;
				delete this.qwindow;
				setTimeout(function(){
					_timeoutWindow.hide();
				}.bind(this), 3000);
			}else{
				this.source.innerHTML = '<a href="javascript:;" _click="setFolderLogo">设为封面</a>';
				var temptipsstr = '设置失败，请刷新页面重试';
				if(!this.qwindow)this.qwindow = this._createwin();
				this.qwindow
					.setSize(240,110)
					.setContent("html", document.getElementById("cont5").innerHTML)
					.showHandle()
					.show();
				$(this.qwindow.dom.winbody).down('.tips_title').innerHTML = temptipsstr;
				var _timeoutWindow = this.qwindow;
				delete this.qwindow;
				setTimeout(function(){
					_timeoutWindow.hide();
				}.bind(this), 3000);
			}
		}.bind(this), '/u/playlists/setfolderlogo', {"fid":data.fid,"vid":data.vid}, 'post');
	},
	removePlaylistVideo: function(fid,vid){
		if(!islogin()) {
			login(function() {window.location.reload()});
			return;
		}
		var vidArr = [],videolist = $('videolist');
		if(!vid){
			try{ if(hz)hz.postHz(4008059,1000707); }catch(e){};
			var vid = '';
			videolist.select('.check input').each(function(o){
				if(o.checked == true){
					vid  +=  vid=='' ? o.value : '|'+o.value;
					vidArr.push(o.value);
				}
			}.bind(this));
		}else{
			try{ if(hz)hz.postHz(4008065,1000707); }catch(e){};
			vidArr.push(vid);
		}
		if(vidArr.length < 1){
			if(!this.qwindow)this.qwindow = this._createwin();
			this.qwindow
				.setSize(190,60)
				.setContent("html", document.getElementById("cont3").innerHTML)
				.hideHandle()
				.hideMask()
				.show();
			$(this.qwindow.dom.winbody).down('.tips_title').innerHTML = '<span class="ico__fail"><em>提示</em></span>您还没有勾选视频';

			var _timeoutWindow = this.qwindow;
			this.qwindow = null;
			setTimeout(function(){
				_timeoutWindow.hide();
			}.bind(this), 3000);
			return;
		}else{
			if(!this.qwindow)this.qwindow = this._createwin();
			this.qwindow
				.setSize(360,150)
				.setContent("html", document.getElementById("cont1").innerHTML)
				.showHandle()
				.show();
			this.qwindow.showMask();
			if(vidArr.length == 1){
				this.qwindow.setSize(240,105);
				$(this.qwindow.dom.winbody).down('.tips_title').innerHTML = '<span class="ico__fail"><em>提示</em></span>您确定要移出此视频么？';
			}else{
				this.qwindow.setSize(265,105);
				$(this.qwindow.dom.winbody).down('.tips_title').innerHTML = '<span class="ico__fail"><em>提示</em></span>您将移出'+vidArr.length+'个视频，请确认。';
			}
			var submite = $(this.qwindow.dom.winbody).down('.tips_action').down('[_id="ok"]');
			submite.onclick = function(){
				nova_request(function(res) {
					if(res == 'ok'){
						var page = $('foldervideos').down(".manager_tool .pages .current");
						if(page){
							page = page.down("span").innerHTML;
							if(videolist.select('tr').length == vidArr.length)page--;
							page = page <1 ? 1 : page;
							mg.getFolderVideos(page);
						}else{
							mg.getFolderVideos(1);
						}
						mg.updatePlaylistInfo(fid);
						var temptipsstr = '<span class="ico__success"><em>提示</em></span>移出成功';
						if(!this.qwindow)this.qwindow = this._createwin();
						this.qwindow
							.setSize(130,60)
							.setContent("html", document.getElementById("cont4").innerHTML)
							.hideHandle()
							.hideMask()
							.show();
						$(this.qwindow.dom.winbody).down('.tips_title').innerHTML = temptipsstr;
						var _timeoutWindow = this.qwindow;
						delete this.qwindow;
						setTimeout(function(){
							_timeoutWindow.hide();
						}.bind(this), 3000);
					}else{
						var temptipsstr = '移出失败，请刷新页面重试';
						if(!this.qwindow)this.qwindow = this._createwin();
						this.qwindow
							.setSize(240,110)
							.setContent("html", document.getElementById("cont5").innerHTML)
							.showHandle()
							.show();
						$(this.qwindow.dom.winbody).down('.tips_title').innerHTML = temptipsstr;
						var _timeoutWindow = this.qwindow;
						delete this.qwindow;
						setTimeout(function(){
							_timeoutWindow.hide();
						}.bind(this), 3000);
					}
				}.bind(this), '/u/playlists/deletefoldervideos', {"fid":fid,"vid":vid}, 'post');
				this.qwindow.hide();
			}.bind(this);
		}
	},

	moredesc: function(event){
		this.source = Element.extend(Event.element(event));
		var intro = this.source.up();
		if(intro.down(".text").style.display == 'none'){
			this.source.innerHTML = '查看全部';
			intro.down(".text").style.display = 'inline';
			intro.down(".tag").style.display = 'none';
		}else{
			this.source.innerHTML = '收起';
			intro.down(".text").style.display = 'none';
			intro.down(".tag").style.display = 'inline';
		}
	},
	getFolderVideos: function(page){
		var foldervideos = $('foldervideos');
		if(!foldervideos)return;
		folderId = foldervideos.readAttribute("_fid");
		if(!folderId)return;
		page = page || 1;
		nova_request(function(res) {
			foldervideos.innerHTML = res;
			foldervideos.focus();
			mg.edit_playlist_init();
		}.bind(this), '/u/playlists/getfoldervideos', {"page":page,"id":folderId}, 'get');
	},
	addvideo: function(event,fid){
		if(fid && fid>0){
			try{ if(hz)hz.postHz(4008058,1000707); }catch(e){};
			this._addvideo(fid);
		}else{
			try{ if(hz)hz.postHz(4008051,1000707); }catch(e){};
			this.source = Element.extend(Event.element(event));
			var data = this.source.up('tr').readAttribute('data');
			if(!data)return;
			data = ('{'+decodeURIComponent(data)+'}').evalJSON(1);
			if(!data.fid ||data.fid<1)return;
			this._addvideo(data.fid);
		}
	},
	_addvideo: function(folderid,addType,page){
		if(!islogin()) {
			login(function() {window.location.reload()});
			return;
		}
		if(!folderid || folderid<1)return;
		var type = addType ? addType : '';
		var params={};
		params.folderid = folderid;
		switch(type){
			case 'url':
				var winbody = $(this.qwindow.dom.winbody),curentmenu = winbody.down(".topicadd .urlselect"),loading = winbody.down('[_id="addvideoloading"]');
				loading.style.display = "none";
				winbody.down(".topicadd").select(".selectmenu").each(function(o){o.removeClassName('current');});
				curentmenu.addClassName('current');
				winbody.down(".qPager").innerHTML = '';
				break;
			case 'up':
				var tpl_add_video_up = $$('script[_uc="tpl_add_video_up"]')[0],winbody = $(this.qwindow.dom.winbody),curentmenu = winbody.down(".topicadd .upselect"),loading = winbody.down('[_id="addvideoloading"]');
				if(!page && curentmenu.innerHTML != ''){
					loading.style.display = "none";
					winbody.down(".topicadd").select(".selectmenu").each(function(o){o.removeClassName('current');});
					curentmenu.addClassName('current');
					winbody.down(".qPager").innerHTML = curentmenu.down(".qPagerCurent").innerHTML;
					winbody.down(".qPager").select("a").each(function(o){
						o.onclick = function(){
							var page = o.readAttribute("_page");
							mg._addvideo(folderid,'up',page);
						}
					}.bind(this));
				}else{
					if(!page)page=1;
					loading.style.display = "block";
					winbody.down(".topicadd").select(".selectmenu").each(function(o){o.removeClassName('current');});
					nova_request(function(res) {
						loading.style.display = "none";
						curentmenu.innerHTML = res;
						curentmenu.addClassName('current');
						winbody.down(".qPager").innerHTML = curentmenu.down(".qPagerCurent").innerHTML;
						winbody.down(".qPager").select("a").each(function(o){
							o.onclick = function(){
								var page = o.readAttribute("_page");
								mg._addvideo(folderid,'up',page);
							}
						}.bind(this));
						curentmenu.select("li").each(function(o){
							var vinput = o.down('input');
							if(mg.addvideoParams.vids[vinput.value] && mg.addvideoParams.vids[vinput.value]>0){
								vinput.checked = true;
							}
							o.down("span").onclick = function(){
								if(vinput.checked){
									vinput.checked = false;
								}else{
									vinput.checked = true;
								}
							}
							o.onclick = function(){
								if(vinput.checked){
									mg.addvideoParams.vids[vinput.value] = vinput.value;
								}else{
									mg.addvideoParams.vids[vinput.value] = null;
								}
							}
						}.bind(this));

					}.bind(this), '/u/playlists/addvideo', {"action":"list","folderid":folderid,"type":"up","page":page}, 'get');
				}
				break;
			case 'fav':
				var tpl_add_video_fav = $$('script[_uc="tpl_add_video_up"]')[0],winbody = $(this.qwindow.dom.winbody),curentmenu = winbody.down(".topicadd .colselect"),loading = winbody.down('[_id="addvideoloading"]');
				if(!page && curentmenu.innerHTML != ''){
					loading.style.display = "none";
					winbody.down(".topicadd").select(".selectmenu").each(function(o){o.removeClassName('current');});
					curentmenu.addClassName('current');
					winbody.down(".qPager").innerHTML = curentmenu.down(".qPagerCurent").innerHTML;
					winbody.down(".qPager").select("a").each(function(o){
						o.onclick = function(){
							var page = o.readAttribute("_page");
							mg._addvideo(folderid,'fav',page);
						}
					}.bind(this));
				}else{
					if(!page)page=1;
					loading.style.display = "block";
					winbody.down(".topicadd").select(".selectmenu").each(function(o){o.removeClassName('current');});
					nova_request(function(res) {
						loading.style.display = "none";
						curentmenu.innerHTML = res;
						curentmenu.addClassName('current');
						winbody.down(".qPager").innerHTML = curentmenu.down(".qPagerCurent").innerHTML;
						winbody.down(".qPager").select("a").each(function(o){
							o.onclick = function(){
								var page = o.readAttribute("_page");
								mg._addvideo(folderid,'fav',page);
							}
						}.bind(this));
						curentmenu.select("li").each(function(o){
							var vinput = o.down('input');
							if(mg.addvideoParams.vids[vinput.value] && mg.addvideoParams.vids[vinput.value]>0){
								vinput.checked = true;
							}
							o.down("span").onclick = function(){
								if(vinput.checked){
									vinput.checked = false;
								}else{
									vinput.checked = true;
								}
							}
							o.onclick = function(){
								if(vinput.checked){
									mg.addvideoParams.vids[vinput.value.toString()] = vinput.value;
								}else{
									delete mg.addvideoParams.vids[vinput.value.toString()];
								}
							}
						}.bind(this));

					}.bind(this), '/u/playlists/addvideo', {"action":"list","folderid":folderid,"type":"fav","page":page}, 'get');
				}
				break;
			case '':
			default:
				var tpl_add_video_url = $$('script[_uc="tpl_add_video_url"]')[0];
				mg.addvideoParams = {};
				mg.addvideoParams.folderid = folderid;
				mg.addvideoParams.urls = [];
				mg.addvideoParams.vids = {};

				YKUC.render(function(html) {
					if(!this.qwindow)this.qwindow = this._createwin();
					this.qwindow
						.setSize(550,610)
						.setContent("html", html)
						.showHandle()
						.show();
					var loading = $(this.qwindow.dom.winbody).down('[_id="addvideoloading"]');
					$(this.qwindow.dom.winbody).down('[_id="menu"]').select('a').each(function(o){
						o.onclick = function(){
							var type = o.readAttribute("_id");
							o.up().select("a").each(function(oo){oo.removeClassName("current");});
							o.addClassName("current");
							loading.style.display = "block";
							mg._addvideo(folderid,type);
						};
					}.bind(this));
					$(this.qwindow.dom.winbody).onclick = function(){
						$('addVideoError').style.display = 'none';
					};
				}.bind(this),{element: tpl_add_video_url, type: '<'},{'folder':params});
				break;
		}
	},
	addvideosubmit: function(){
		var _addvideoParams = {};
		if(mg.addvideoParams){
			_addvideoParams = mg.addvideoParams;
			_addvideoParams.urls = '';
		}
		_addvideoParams.urls = trim($(this.qwindow.dom.winbody).down("textarea").value);

		if(!empty(_addvideoParams.urls)){
			var urlArray = _addvideoParams.urls.split('\n'); var vids = [];
			var re = /^http:\/\/v\.youku\.com\/v_show\/id_(\S+)\.html[\s\S]*$/;
			for(var i=0; i<urlArray.length; ++i){
				var videoUrl = trim(urlArray[i]);
				if(!re.test(videoUrl)) continue;
				re.exec(videoUrl); vids.push(RegExp.$1);
			}
			if(!empty(vids)) {
				vids = vids.uniq();
				_addvideoParams.urls = vids;
			}else{
				alert('您填写的URL地址可能不正确！');
			}
		}
		var params = {};
		params.action = 'submit'
		params.folderid = _addvideoParams.folderid;
		params.encodevids = !empty(_addvideoParams.urls) ? _addvideoParams.urls.join("|") : '';
		//	params.vids = !empty(_addvideoParams.vids) ? _addvideoParams.vids.uniq().join("|") : '';
		params.vids ='';
		for(var k in _addvideoParams.vids){

			params.vids += params.vids == ''? _addvideoParams.vids[k] : '|' + _addvideoParams.vids[k];
		}

		nova_request(function(res) {
			if(res == -6){
				$('addVideoError').style.display = 'inline-block';
				return;
			}
			this.qwindow.hide();
			this.qwindow
				.setSize(130,60)
				.setContent("html", document.getElementById("cont4").innerHTML)
				.hideHandle()
				.hideMask()
				.show();
			var temptipsstr = '<span class="ico__success"><em>提示</em></span>添加成功';
			$(this.qwindow.dom.winbody).down('.tips_title').innerHTML = temptipsstr;
			var _timeoutWindow = this.qwindow;
			delete this.qwindow;
			setTimeout(function(){
				_timeoutWindow.hide();
				if (window.location.href.match(/edit/i)){
					mg.getFolderVideos(1);
				}else{
					window.location.reload();
				}
				mg.updatePlaylistInfo(params.folderid);
			}.bind(this), 3000);

		}.bind(this), '/u/playlists/addvideo', params, 'post');
	},
	shareplaylist: function(event){
		try{ if(hz)hz.postHz(4008053,1000707); }catch(e){};
		this.source = Element.extend(Event.element(event));
		if(!this.qwindow)this.qwindow = this._createwin();

		var temp = $("cont6").innerHTML,titleE=this.source.up("tr").down(".topic_info .p_title a"),url=titleE.href,title = titleE.title,eid="";
		var myregexp = /id_([^.]+).html/i;
		var match = myregexp.exec(url);
		if (match != null)eid = match[1];

		var urlTitle = encodeURIComponent(title), h1Title = title.replace(/</ig, "&lt;").replace(/>/ig, "&gt;");

		temp = temp.replace(/%url/ig, url);
		temp = temp.replace(/%htitle/ig, h1Title);
		temp = temp.replace(/%title/ig, urlTitle);
		temp = temp.replace(/%eid/ig, eid);
		this.qwindow
			.setSize(600,210)
			.setContent("html", temp)
			.showHandle()
			.show();
		try{
			var winclose = $(this.qwindow.dom.winhead).down('.winclose');
			winclose.setAttribute("data-stat-role", "ck");
		}catch(e){};

	},
	addplaylist: function(){
		try{ if(hz)hz.postHz(4008046,1000707); }catch(e){};
		this._showeditplaylist();
	},
	editplaylist: function(id){
		try{ if(hz)hz.postHz(4008057,1000707); }catch(e){};
		this._showeditplaylist(id);
	},
	_showeditplaylist: function(folderid){
		if(!islogin()) {
			login(function() {window.location.reload()});
			return;
		}
		var folder=null,tpl_edit_playlist = $$('script[_uc="tpl_edit_playlist"]')[0];
		if(!this.qwindow)this.qwindow = this._createwin();
		if(folderid){
			nova_request(function(res) {
				res = typeof res == 'object' ? res : res.stripScripts().evalJSON(true);
				folder = res;
				YKUC.render(function(html) {
					this.qwindow
						.setSize(550,540)
						.setContent("html", html)
						.showHandle()
						.show();
					$(this.qwindow.dom.winbody).down("h3.title").innerHTML = '编辑播单信息';
					var newheight = $("topicedit").getHeight();
					this.qwindow.setSize(550,newheight);
					addEventToEditPlaylist();
				},{element: tpl_edit_playlist, type: '<'},{'folder':folder});
			}.bind(this), '/u/playlists/getfolder', {"folderid":folderid}, 'get');
		}else{
			YKUC.render(function(html) {
				this.qwindow
					.setSize(550,540)
					.setContent("html", html)
					.showHandle()
					.show();
				addEventToEditPlaylist();
				var newheight = $("topicedit").getHeight();
				this.qwindow.setSize(550,newheight);
			},{element: tpl_edit_playlist, type: '<'},{'folder':folder});
		}

		function addEventToEditPlaylist(){
			//变更验证码
			mg.chVerifyImg($('verifyCode'));
			//视频tag
//			var videoTags = $('videoTags');
//			videoTags.select('a').each(function(o){
//				o.onclick = function(){
//					var vtags = $('vtags');
//					if(vtags.value == ''){
//						$('vtags').value = o.innerHTML;
//					}else{
//						$('vtags').value += ' ' + o.innerHTML;
//					}
//					o.remove();
//					$('vtags').focus();
//				};
//			}.bind(this));
			//drop
//			$('droptype').onclick = function(e){
//				mg.droptype(e);
//			}
			//选择类别
//			$('droptypes').select('a').each(function(o){
//				if($('droptype_sv').value == o.readAttribute("_id")){
//					o.addClassName("selected");
//				}else{
//					o.removeClassName("selected");
//				}
//				o.onclick = function(){
//					$('droptypes').select('a').each(function(o){o.removeClassName("selected");});
//					o.addClassName("selected");
//					$('droptype_s').innerHTML = o.innerHTML;
//					$('droptype_sv').value = o.readAttribute("_id");
//				}
//			}.bind(this));
		}
	},
	droptype: function(e){
		var panel = $('droptypes'),e = e||event;
		function toggle(o){
			if(!o)return;
			if(o.style.display == 'none'){
				o.style.display = 'block';
			}else{
				o.style.display = 'none';
			}
		}
		toggle(panel);
		document.body.onclick = function(){
			panel.style.display = 'none';
		}
		Event.stop(e);
	},
	deleteplaylist: function(event){
		if(!islogin()) {
			login(function() {window.location.reload()});
			return;
		}
		try{ if(hz)hz.postHz(4008054,1000707); }catch(e){};
		this.source = Element.extend(Event.element(event));
		if(!this.qwindow)this.qwindow = this._createwin();
		this.qwindow
			.setSize(355,105)
			.setContent("html", document.getElementById("cont1").innerHTML)
			.showHandle()
			.show();
		this.qwindow.showMask();
		$(this.qwindow.dom.winbody).down('.tips_content').style.display ='none';
		$(this.qwindow.dom.winbody).down('.tips_title').innerHTML = '<span class="ico__fail"><em>提示</em></span>您确定要删除此播单么？（不会删除视频）';
		this.tempfoldertr = this.source.up('tr');
		this.tempfolderid = this.tempfoldertr.readAttribute("_id");
	},
	deleteplaylistok: function(){
		nova_request(function(res) {
			this.qwindow.hide();
			if(res != 'ok'){
				this.qwindow
					.setSize(240,110)
					.setContent("html", document.getElementById("cont5").innerHTML)
					.showHandle()
					.show();
			}else{
				this.qwindow
					.setSize(130,60)
					.setContent("html", document.getElementById("cont4").innerHTML)
					.hideHandle()
					.hideMask()
					.show();
				var _timeoutWindow = this.qwindow;
				delete this.qwindow;
				setTimeout(function(){
					_timeoutWindow.hide();
				}.bind(this), 3000);
				this.tempfoldertr.remove();
				var tempvideolist = $('playlist').select("tr");
				if(tempvideolist.length>0){
					for(i=0; i<tempvideolist.length; i++){
						if(i%2 == 0){
							tempvideolist[i].removeClassName("manager_even");
						}else{
							tempvideolist[i].addClassName("manager_even");
						}
					}
				}else{
					window.location='/u/playlists';
				}
			}
			return;
		}.bind(this), '/u/playlists/deletefolder', {"folderid":this.tempfolderid}, 'post');
	},
	_alert2: function(title,msg,eleid,eleids){
		if(eleids){
			$(eleid).addClassName('form_input_error');
			$(eleids.escroll).scrollTo();

			eleids.errorE = $(eleid).up(".entry").down(".error");
			$(eleids.errorE).innerHTML = msg;

			if(eleids.eclick){
				$(eleids.eclick).onclick = function(o){
					$(eleid).removeClassName('form_input_error');
					$(eleids.errorE).innerHTML = '';
				}
			}

			if(eleids.efocus){
				$(eleids.efocus).onfocus = function(o){
					$(eleid).removeClassName('form_input_error');
					$(eleids.errorE).innerHTML = '';
				}
			}
		}
	},
	addplaylistsubmit: function(){
		var params={};
		params.folderid = $('crtFolderId').value;
		params.name = $('crtFolderName').value;
		params.verify_code = $('verifyCode').value;
		params.desc = $('crtFolderDesc').value;
//		params.tags = $('vtags').value;
//		params.cateid = $('droptype_sv').value;

		if(trim(params.name).length == 0){
			mg._alert2('错误','请填写标题！','crtFolderName',{"escroll":"topicedit","eclick":"crtFolderName","efocus":"crtFolderName"});return;
		}
		if(trim(params.name).length < 2){
			mg._alert2('错误','播单名称至少为两个字符！','crtFolderName',{"escroll":"topicedit","eclick":"crtFolderName","efocus":"crtFolderName"});return;
		}
		if(trim(params.name).length > 100){
			mg._alert2('错误','标题最多100个字符，当前已输入'+ trim(params.name).length +'个字符！','crtFolderName',{"escroll":"topicedit","eclick":"crtFolderName","efocus":"crtFolderName"});return;
		}
//        if( isNaN(params.cateid) || params.cateid.length < 1){
//			mg._alert2('错误','请选择一个分类！','droptypes',{"escroll":"topicedit","eclick":"droptypes"});return;
//        }
//        if(trim(params.tags).length == 0){
//			mg._alert2('错误','请填写标签，标签用空格或逗号分隔！','vtags',{"escroll":"topicedit","eclick":"videoTagsParent","efocus":"vtags"});return;
//        }
//		var tempTags = trim(params.tags).split(/[\s|,]+/i);
//		if(tempTags.length > 10){
//			mg._alert2('错误','标签最多10个！','vtags',{"escroll":"topicedit","eclick":"videoTagsParent","efocus":"vtags"});return;
//        }
//		for (i=0;i<tempTags.length ;i++ ){
//			if(trim(tempTags[i]).length < 2){
//				mg._alert2('错误','单个标签最少2个字！','vtags',{"escroll":"topicedit","eclick":"videoTagsParent","efocus":"vtags"});return;
//			}
//			if(trim(tempTags[i]).length > 12){
//				mg._alert2('错误','单个标签最多6个字！','vtags',{"escroll":"topicedit","eclick":"videoTagsParent","efocus":"vtags"});return;
//			}
//		}
		if(trim(params.verify_code).length == 0){
			mg._alert2('错误','请填写验证码','verifyCode',{"escroll":"topicedit","eclick":"verifyCode","efocus":"verifyCode"});return;
		}
		if(trim(params.verify_code).length < 4){
			mg._alert2('错误','验证码错误，请您重新输入！','verifyCode',{"escroll":"topicedit","eclick":"verifyCode","efocus":"verifyCode"});return;
		}

		nova_request(function(res) {
			if(parseInt(res,10) > 0){
				if(!this.qwindow)this.qwindow = this._createwin();
				if(params.folderid.length > 0){
					this.qwindow
						.setSize(190,60)
						.setContent("html", document.getElementById("cont4").innerHTML)
						.hideHandle()
						.hideMask()
						.show();
					var temptipsstr = '<span class="ico__success"><em>提示</em></span>编辑播单信息成功';
					$(this.qwindow.dom.winbody).down('.tips_title').innerHTML = temptipsstr;
					var _timeoutWindow = this.qwindow;
					delete this.qwindow;
					setTimeout(function(){
						_timeoutWindow.hide();
					}.bind(this), 3000);
					mg.updatePlaylistInfo(params.folderid);
				}else{
					this.qwindow
						.setSize(300,135)
						.setContent("html", document.getElementById("cont101").innerHTML)
						.showHandle()
						.show();
					$(this.qwindow.dom.winbody).down('.tips_action .form_btnmaj_s').onclick=function(){
						if(this.qwindow)this.qwindow.hide();
						window.open("/u/playlists/edit/id_"+res+".html");
					}.bind(this);

				}
			}else{
				mg.chVerifyImg($('verifyCode'));
				switch(parseInt(res,10)){
					//case -1: mg._alert('错误','参数校验失败，请使用正确的方法创建播单！','crtFolderDesc');break;
					case -2: mg._alert2('错误','标题含有禁忌词，请您修改后重新保存！','crtFolderName',{"escroll":"topicedit","eclick":"crtFolderName","efocus":"crtFolderName"});break;
					case -3: mg._alert2('错误','简介含有禁忌词，请您修改后重新保存！','crtFolderDesc',{"escroll":"topicedit","eclick":"crtFolderDesc","efocus":"crtFolderDesc"});break;
					case -4: mg._alert2('错误','标签含有禁忌词，请您修改后重新保存！','vtags',{"escroll":"topicedit","eclick":"videoTagsParent","efocus":"vtags"});break;
					//case -5: mg._alert('错误','数据库操作异常，请与网站管理员联系！','crtFolderDesc');break;
					//case -6: mg._alert('错误','播单已满<br />每个播单最多可以添加200个视频！','crtFolderDesc');break;
					case -7: mg._alert2('错误','验证码错误，请您重新输入！','verifyCode',{"escroll":"topicedit","eclick":"verifyCode","efocus":"verifyCode"});break;
					default:
						this.qwindow
							.setSize(240,110)
							.setContent("html", document.getElementById("cont5").innerHTML)
							.showHandle()
							.show();
						break;
				}
			}
			return;
		}.bind(this), '/u/playlists/save', params, 'post');
	},
	chVerifyImg: function(obj){
		$(obj).up().down("img").src =  "/u/verify?time =" + Math.random();
	},
	edit_initV2: function () {
		if(typeof $$('[_ucpage="editvideo"]')[0] == 'undefined')return;
		this.shotDetail = null; //截图data
		var videoTags = $('videoTags');
		if (videoTags) {
			videoTags.down('ul').select('a').each(function(o){
				o.onclick = function(e){
					var tags_node = document.forms['video']['tags'];
					if(tags_node.value == ''){
						tags_node.value = o.innerHTML;
					}else{
						tags_node.value += ' ' + o.innerHTML;
					}
					o.up('li').remove();
					tags_node.focus();
					mg.preventDefault(e);
				};
			}.bind(this));
		}

		var video = document.forms['video'];
		if ( video ) {
			$(video).select('input','textarea').each(function(o){
				o.onfocus = function(){
					$('isvaluechange').innerHTML = 1;
				}
			}.bind(this));			
		}

		window.onbeforeunload = function(e){
			if($('isvaluechange').innerHTML == 1){
				if(Prototype.Browser.IE){
					return "当前内容尚未保存，是否放弃？";
				}else{
					e.returnValue="当前内容尚未保存，是否放弃？";
					return "当前内容尚未保存，是否放弃？";
				}
			}
		};

		/*新加话题*/
		jQuery(document).on('click','.unselecttopic .topic-close-yes',function(){
			var _this = jQuery(this);
			var class_name = _this.parent().attr('_data_class');
			_this.parent().remove();
			jQuery('.'+class_name).show();
			$('input_error').style.display = 'none';
			jQuery('.topic').removeClass('form_input_error');
		});

		jQuery(document).on('click','.unselecttopic .topic-close-no',function(){
			var _this = jQuery(this);
			_this.parent().remove();
			$('input_error').style.display = 'none';
			jQuery('.topic').removeClass('form_input_error');
		});

		jQuery(document).on('click','.selecttopic',function(){
			var _this = jQuery(this);
			var topic_num = 0;
			jQuery('#issetvideotopic li').each(function(){
				topic_num += 1;
			});
			if(topic_num > 0)
			{
				return mg.showVideoError('topic_info_error','话题最多为1个!');
			}else{
				var class_id = _this.attr('_data_classid');
				var tag_name = _this.attr('_data_tag');
				var div = '<li _data_tag="'+tag_name+'" class="unselecttopic" _data_class="selecttopic_'+class_id+'">#'+tag_name+'#<i class="topic-close topic-close-yes"></i></li>';
				_this.hide();
				jQuery('#issetvideotopic').append(div);
			}
		});
		/*付费视频*/
		jQuery(".label-box").parent().parent().parent().css("overflow","inherit")
		jQuery(".lebel-help-icon").on("mouseover",function(){
			jQuery(".lebel-pop-box").css("display", "block");
		});
		jQuery(".lebel-help-icon").on("mouseout",function(){
			jQuery(".lebel-pop-box").css("display", "none");
		});
		jQuery(".dropdown-toggle").click(function(event){
			jQuery(".dropdown-menu").css("display","block");
			event.stopPropagation();
		});
		jQuery(".dropdown-menu ul li").click(function(){
			jQuery(".handle-money").html(jQuery(this).html());
			//jQuery(".lebel-money input").attr("value",parseFloat(jQuery(this).html()));
			jQuery("#feevaluetext").attr("value",parseFloat(jQuery(this).html()));
			jQuery(".dropdown-menu").css("display","none");
		})
		jQuery(document).click(function(event){
			jQuery(".dropdown-menu").css("display","none");
			event.stopPropagation();
		})

		/*付费视频*/
	},
	//---------------------------------------------------------------
	edit_init: function(){
		if(typeof $$('[_ucpage="editvideo"]')[0] == 'undefined')return;
		this.shotDetail = null; //截图data
		var videoTags = $('videoTags');
		videoTags.down('ul').select('a').each(function(o){
			o.onclick = function(e){
				var vtags = $('vtags');
				if(vtags.value == ''){
					$('vtags').value = o.innerHTML;
				}else{
					$('vtags').value += ' ' + o.innerHTML;
				}
				o.up('li').remove();
				$('vtags').focus();
				mg.preventDefault(e);
			};
		}.bind(this));
		$('video_edit_form').select('input','textarea').each(function(o){
			o.onfocus = function(){
				$('isvaluechange').innerHTML = 1;
			}
		}.bind(this));

		window.onbeforeunload = function(e){
			if($('isvaluechange').innerHTML == 1){
				if(Prototype.Browser.IE){
					return "当前内容尚未保存，是否放弃？";
				}else{
					e.returnValue="当前内容尚未保存，是否放弃？";
					return "当前内容尚未保存，是否放弃？";
				}
			}
		};

		try{this._checkEditChangeSomeValue('init');}catch(e){};
	},
	list_init: function(){
		if(typeof $$('[_ucpage="listvideo"]')[0] == 'undefined')return;
		this.videosGuide();
		var videolist = $('videolist'),pageType='success',posttips,biankanbianmaiTips=$('biankanbianmaiTips');

		this.actionListRewrite();
		Event.observe($(document.body), 'click',function(){
			if($('panel'))
				$('panel').style.display = 'none';
		}.bind(this));
		if(biankanbianmaiTips){
			var bkbmtips = Nova.Cookie.get('bkbmtips');
			if(bkbmtips != 1 )biankanbianmaiTips.style.display = 'block';
		}
		if (window.location.href.match(/lost/i))pageType='lost';
		if(!videolist)return;
		videolist.select('.m_income').each(function(o){
			o.down('ul').select('li').each(function(oo){
				var bubble = oo.down('.bubble'),ismousein=0;
				oo.onmouseover = function(){
					bubble.style.display = 'block';
				};
				oo.onmouseout = function(){
					setTimeout(function(){
						if(ismousein != 1)
							bubble.style.display = 'none';
					},50);
				};
				bubble.onmouseover = function(){
					ismousein = 1;
				};
				bubble.onmouseout = function(){
					ismousein = 0;
				};
			}.bind(this));
		}.bind(this));
		videolist.select('.actionSelectDropmenu').each(function(o){
			var dropMenu = o.up('.action_select_dropmenu');
			o.onmouseover = function(){
				if(dropMenu)dropMenu.addClassName('open');
				ismousein = 1;
			};
			o.onmouseout = function(){
				ismousein = 0;
				setTimeout(function(){
					if(ismousein != 1)
						if(dropMenu)dropMenu.removeClassName('open');
				},50);
			};
			dropMenu.onmouseover = function(){
				ismousein = 1;
				dropMenu.addClassName('open');
			};
			dropMenu.onmouseout = function(){
				ismousein = 0;
				setTimeout(function(){
					if(ismousein != 1)
						if(dropMenu)dropMenu.removeClassName('open');
				},50);
			};
		}.bind(this));
		videolist.select('.check input').each(function(o){
			o.onclick = function(){
				if(o.checked == true){
					if(videolist.select('.check input:checked').length == videolist.select('.check input').length){
						$('check_all').checked = true;
						//$('check_all_foot').checked = true;
					}
					o.up('tr').addClassName('highlight');
				}else{
					o.up('tr').removeClassName('highlight');
					$('check_all').checked = false;
					//$('check_all_foot').checked = false;
				}
			};
		}.bind(this));

		videolist.select('tr').each(function(o){
			var action = o.down(".action"),ktipscookie = Nova.Cookie.get('ktips'),isTipsOpen = 'close';
			if(isTipsOpen == 'open' && (!ktipscookie || ktipscookie != 1)){
				if(posttips !=1 && action && action.down('a[_hz="edit"]')){
					var tipshtml = "<div class='post-tips' ><div class='con'><div class='arrow'></div><div class='cl' onclick=\"this.parentNode.parentNode.style.display='none'\"></div><p>新增自选封面功能，快来试试吧！</p><a href='javascript:;'>知道了!</a></div></div>";
					action.insert(tipshtml);
					posttips =1;
					var tips = action.down(".post-tips"),knowtips = tips.down("a"),closetips = tips.down(".cl");
					Event.observe(knowtips, 'click', function(){
						tips.remove();
						Nova.Cookie.set('ktips', 1, 365, '/u/', window.location.host);
						return false;
					}.bind(this));
					Event.observe(closetips, 'click', function(){
						tips.style.display = 'none';
						return false;
					}.bind(this));
				}
			}

		}.bind(this));

		videolist.select('.m_stat .stat_cont').each(function(o){
			var timer,tipcard,isHzOpen=1;
			o.onmouseover = function(){
				var data = o.readAttribute('data'),tips = o.down('.tips'),objRefer;
				if(!data || !tips)return;
				data = ('{'+decodeURIComponent(data)+'}').evalJSON(1);
				objRefer = o.down(1);

				if(data.type == 1 && !data.gethd){
					nova_request(function(res) {
						res = typeof res == 'object' ? res : res.stripScripts().evalJSON(true);
						//alert(res.error+'---'+res.status[data.vid].hd+'---'+res.status[data.vid].hd2+'---'+data.vid);
						if(data.hd == 1){
							if(res.status[data.vid].hd2 > 0){
								//bar0
								data.type = 10;
							}else{
								//无
							}
						}else{
							if(res.status[data.vid].hd > 0){
								if(res.status[data.vid].hd2 > 0){
									//bar1
									data.type = 11;
								}else{
									//bar3
									data.type = 13;
								}
							}else{
								if(res.status[data.vid].hd2 > 0){
									data.type = 10;
								}
							}
						}
						if(data.type >= 10){
							switch(data.type){
								case 10:
									tips.down('.process_stat').innerHTML = '<span>上传</span><span>转码</span><span>审核</span><span>高清</span><span>超清</span>';
									tips.down('.process_bar').addClassName('bar0');
									tips.down('.process_result').innerHTML = '超清转码中...';
									addMouseEvent();
									break;
								case 11:
									tips.down('.process_stat').innerHTML = '<span>上传</span><span>转码</span><span>审核</span><span>高清</span><span>超清</span>';
									tips.down('.process_bar').addClassName('bar1');
									tips.down('.process_result').innerHTML = '高清转码中...';
									addMouseEvent();
									break;
								case 13:
									tips.down('.process_stat').innerHTML = '<span>上传</span><span>转码</span><span>审核</span><span>高清</span>';
									tips.down('.process_bar').addClassName('bar3');
									tips.down('.process_result').innerHTML = '高清转码中...';
									addMouseEvent();
									break;
								default:
									tips.remove();
									break;
							}
						}else{
							tips.remove();
						}
						data.gethd = 1; //不再请求高清借口标志
						data = encodeURIComponent(JSON.stringify(data).replace(/[{}]/g, ''));
						//data = encodeURIComponent(JSON.stringify(data).replace(/[{}]/g, ''));
						//o.setAttribute('data', data);
						o.writeAttribute('data', data);
					}.bind(this), '/u/videos/videohdquery', {ids:data.vid}, 'get');
				}else{
					addMouseEvent();
				}

				function addMouseEvent(){
					if(!tips)return;

					if(timer){ clearTimeout(timer); }
					timer = setTimeout(function(){
						if(!tipcard){
							tipcard = new Qcard();
						}
						tipcard
							.setRefer(objRefer)
							.setContent('html', tips.innerHTML)
							.show();
						if(isHzOpen == 1){
							if(pageType == 'lost'){
								try{hz.handler_object(1,'lost_status')}catch(e){};
							}else{
								try{hz.handler_object(1,'status')}catch(e){};
							}
							isHzOpen = 0;
						}

						tipcard.getNode().onmouseover = function(){clearTimeout(timer);tipcard.show();isHzOpen=0;};
						tipcard.getNode().onmouseout = function(){tipcard.hide(); isHzOpen = 0;};
					},200);
				}
			}.bind(this);
			o.onmouseout  = function(){
				if(timer){ clearTimeout(timer); }
				if(tipcard){
					timer = setTimeout(function(){ tipcard.hide();isHzOpen=1; },200);
				}
			}.bind(this);
		}.bind(this));
	},
	ucindex_init: function(){
		//wrx
		if(typeof $$('[_ucpage="ucindex"]')[0] == 'undefined')return;

		var videolist = $('videolist'),pageType='success',posttips,biankanbianmaiTips=$('biankanbianmaiTips');

		this.actionListRewrite();
		Event.observe($(document.body), 'click',function(){
			if($('panel'))
				$('panel').style.display = 'none';
		}.bind(this));
		if(biankanbianmaiTips){
			var bkbmtips = Nova.Cookie.get('bkbmtips');
			if(bkbmtips != 1 )biankanbianmaiTips.style.display = 'block';
		}
		if(!videolist)return;
		videolist.select('.m_income').each(function(o){
			//wrx
			o.down('ul').select('li').each(function(oo){
				var bubble = oo.down('.bubble'),ismousein=0;
				oo.onmouseover = function(){
					bubble.style.display = 'block';
				};
				oo.onmouseout = function(){
					setTimeout(function(){
						if(ismousein != 1)
							bubble.style.display = 'none';
					},50);
				};
				bubble.onmouseover = function(){
					ismousein = 1;
				};
				bubble.onmouseout = function(){
					ismousein = 0;
				};
			}.bind(this));
		}.bind(this));
		videolist.select('.m_stat .stat_cont').each(function(o){
			var timer,tipcard,isHzOpen=1;
			o.onmouseover = function(){
				var data = o.readAttribute('data'),tips = o.down('.tips'),objRefer;
				if(!data || !tips)return;
				data = ('{'+decodeURIComponent(data)+'}').evalJSON(1);
				objRefer = o.down(1);

				if(data.type == 1 && !data.gethd){
					nova_request(function(res) {
						res = typeof res == 'object' ? res : res.stripScripts().evalJSON(true);
						if(data.hd == 1){
							if(res.status[data.vid].hd2 > 0){
								//bar0
								data.type = 10;
							}else{
								//无
							}
						}else{
							if(res.status[data.vid].hd > 0){
								if(res.status[data.vid].hd2 > 0){
									//bar1
									data.type = 11;
								}else{
									//bar3
									data.type = 13;
								}
							}else{
								if(res.status[data.vid].hd2 > 0){
									data.type = 10;
								}
							}
						}
						if(data.type >= 10){
							switch(data.type){
								case 10:
									tips.down('.process_stat').innerHTML = '<span>上传</span><span>转码</span><span>审核</span><span>高清</span><span>超清</span>';
									tips.down('.process_bar').addClassName('bar0');
									tips.down('.process_result').innerHTML = '超清转码中...';
									addMouseEvent();
									break;
								case 11:
									tips.down('.process_stat').innerHTML = '<span>上传</span><span>转码</span><span>审核</span><span>高清</span><span>超清</span>';
									tips.down('.process_bar').addClassName('bar1');
									tips.down('.process_result').innerHTML = '高清转码中...';
									addMouseEvent();
									break;
								case 13:
									tips.down('.process_stat').innerHTML = '<span>上传</span><span>转码</span><span>审核</span><span>高清</span>';
									tips.down('.process_bar').addClassName('bar3');
									tips.down('.process_result').innerHTML = '高清转码中...';
									addMouseEvent();
									break;
								default:
									tips.remove();
									break;
							}
						}else{
							tips.remove();
						}
						data.gethd = 1; //不再请求高清借口标志
						data = encodeURIComponent(JSON.stringify(data).replace(/[{}]/g, ''));
						//data = encodeURIComponent(JSON.stringify(data).replace(/[{}]/g, ''));
						//o.setAttribute('data', data);
						o.writeAttribute('data', data);
					}.bind(this), '/u/videos/videohdquery', {ids:data.vid}, 'get');
				}else{
					addMouseEvent();
				}

				function addMouseEvent(){
					if(!tips)return;

					if(timer){ clearTimeout(timer); }
					timer = setTimeout(function(){
						if(!tipcard){
							tipcard = new Qcard();
						}
						tipcard
							.setRefer(objRefer)
							.setContent('html', tips.innerHTML)
							.show();
						if(isHzOpen == 1){
							if(pageType == 'lost'){
								try{hz.handler_object(1,'lost_status')}catch(e){};
							}else{
								try{hz.handler_object(1,'status')}catch(e){};
							}
							isHzOpen = 0;
						}

						tipcard.getNode().onmouseover = function(){clearTimeout(timer);tipcard.show();isHzOpen=0;};
						tipcard.getNode().onmouseout = function(){tipcard.hide(); isHzOpen = 0;};
					},200);
				}
			}.bind(this);
			o.onmouseout  = function(){
				if(timer){ clearTimeout(timer); }
				if(tipcard){
					timer = setTimeout(function(){ tipcard.hide();isHzOpen=1; },200);
				}
			}.bind(this);
		}.bind(this));
	},
	handler_event: function(event) {
		var cmd;
		this.source = Element.extend(Event.element(event));
		if((cmd = this.source.getAttribute('_click'))) {
			try {mg[cmd](event);Event.stop(event);} catch(e) {alert(e)};
		}else{
			this.source = this.source.up('[_click]',0);
			if(this.source && (cmd = this.source.getAttribute('_click'))) {
				try {mg[cmd](event);Event.stop(event);} catch(e) {alert(e)};
			}
		}
	},
	parsev: function() {
		var players=$$('[_mg="player"]'), len=players.length, p, data, pbox={};
		if(!len) return;
		function _player(moviename) {
			if(moviename)
				return $(moviename);
			else
				return $(playerId);
			//return $(moviename?moviename:playerId);
			if (navigator.appName.indexOf("Microsoft") != -1)return window[moviename?moviename:playerId];
			return document[moviename?moviename:playerId];
		};
		function isPlayerLoading(){
			player = _player(playerId);
			mg.player = player;
			if(player != null){
				clearInterval(intervalId);
				$('add_swf_loading').style.display = 'none';
				//$('shot_btn').removeClassName('btn_disable');
			}else{
				//$('add_swf_loading').style.display = 'none';
				//$('shot_btn').removeClassName('btn_disable');
			}
		}
		var playerId="pswf_screenshot",intervalId;

		p = players[0];
		pbox.elm = p;
		if(!pbox.elm) return;
		data = decodeURIComponent('{'+pbox.elm.getAttribute('data')+'}').evalJSON(1);
		data.show_ce=0;
		data.showsearch=0;
		if(!data || !data.player) return;
		pbox.id = pbox.elm.id = 'pbox_screenshot';
		st.addswf(pbox.id, data);
		intervalId = setInterval(isPlayerLoading, 1000);
	},
	chtab: function(event){ //封面上传
		__this = jQuery(event);
		if(navigator.userAgent.indexOf('Chrome')== -1 && mg.player && __this.parent().attr('id') == 'videopicsys')mg.player.pauseVideo(true);
		if(__this.parent().attr('id') == 'videopicself')
		{
			__this.parent().addClass('current');
			__this.parent().html('<span>自选封面</span>');
			$$('[_mg="screenshot"]')[0].style.display='block';
			$$('[_mg="view"]')[0].style.display='none';
			jQuery('#videopicsys').html('<a onclick="mg.chtab(this);">系统封面</a>');
			jQuery('#videopicsys').removeClass('current');
			if(isopenuploadscreen == 1)
			{
				jQuery('#videopicupload').html('<a onclick="mg.chtab(this);">上传封面</a>');
				jQuery('#videopicupload').removeClass('current');
				$$('[_mg="uploadscreen"]')[0].style.display='none';
			}
		}else if(__this.parent().attr('id') == 'videopicsys'){
			__this.parent().addClass('current');
			__this.parent().html('<span>系统封面</span>');
			$$('[_mg="view"]')[0].style.display='block';
			if(jQuery('#videopicself'))
			{
				jQuery('#videopicself').html('<a onclick="mg.chtab(this);">自选封面</a>');
				jQuery('#videopicself').removeClass('current');
				$$('[_mg="screenshot"]')[0].style.display='none';
			}
			if(isopenuploadscreen == 1)
			{
				jQuery('#videopicupload').html('<a onclick="mg.chtab(this);">上传封面</a>');
				jQuery('#videopicupload').removeClass('current');
				$$('[_mg="uploadscreen"]')[0].style.display='none';
			}
		}else if(__this.parent().attr('id') == 'videopicupload'){
			__this.parent().addClass('current');
			__this.parent().html('<span>上传封面</span>');
			$$('[_mg="uploadscreen"]')[0].style.display='block';
			$$('[_mg="view"]')[0].style.display='none';
			jQuery('#videopicsys').html('<a onclick="mg.chtab(this);">系统封面</a>');
			jQuery('#videopicsys').removeClass('current');
			if(jQuery('#videopicself'))
			{
				jQuery('#videopicself').html('<a onclick="mg.chtab(this);">自选封面</a>');
				jQuery('#videopicself').removeClass('current');
				$$('[_mg="screenshot"]')[0].style.display='none';
			}
		}

		//titleEs.each(function(o) {
		//
		//	//if(titleEs.indexOf(o) == 0){
		//	//	if(o.hasClassName("current")){
		//	//		titleEs[0].removeClassName('current');
		//	//		titleEs[0].innerHTML = '<a _click="chtab">' + titleEs[0].down('span').innerHTML + '</a>';
		//	//		titleEs[1].addClassName('current');
		//	//		titleEs[1].innerHTML = '<span>' + titleEs[1].down('a').innerHTML + '</span>';
		//	//
		//	//		$$('[_mg="view"]')[0].style.display='block';
		//	//	}else{
		//	//		titleEs[0].addClassName('current');
		//	//		titleEs[0].innerHTML = '<span>' + titleEs[0].down('a').innerHTML + '</span>';
		//	//		titleEs[1].removeClassName('current');
		//	//		titleEs[1].innerHTML = '<a _click="chtab">' + titleEs[1].down('span').innerHTML + '</a>';
		//	//		$$('[_mg="screenshot"]')[0].style.display='block';
		//	//		$$('[_mg="view"]')[0].style.display='none';
		//	//	}
		//	//}
		//}.bind(this));
	},
	chlogo: function(event){
		this.source = Element.extend(Event.element(event));
		var imgEs = $$('[_mg="view"]')[0].down('ul').select('li');
		imgEs.each(function(o) {
			o.removeClassName('current');
		});
		this.source.up('li').addClassName('current');
		$('logo_e').down('img').src = this.source.src;
		$('logo_e').down('img').writeAttribute('_logo',this.source.readAttribute('_logo'));

		var klogocookie = Nova.Cookie.get('klogo');
		if(!klogocookie || klogocookie != 1){
			if($('logo_e').down('.post-tips'))$('logo_e').down('.post-tips').style.display = 'block';
		}
		$('logorevert').innerHTML = '<a href="javascript:;" _click="revertlogo">还原</a>';
		$('isvaluechange').innerHTML = 1;
	},
	revertlogo: function(event){
		this.source = Element.extend(Event.element(event));
		$('logorevert').innerHTML = '<span>还原</span>';
		var video = document.forms['video'];
		$('logo_e').down('img').src = $F(video['thumnail_url_ori']);
		$('logo_e').down('img').writeAttribute('_logo','');
		if($('loglists')){
			$('loglists').select("li").each(function(o){
				if(o.readAttribute('_default') && o.readAttribute('_default') == 1){
					o.addClassName('current');
				}else{
					o.removeClassName('current');
				}
			}.bind(this));
		}
		return;
	},
	knowlogo: function(event){
		this.source = Element.extend(Event.element(event));
		this.source.up(1).remove();
		Nova.Cookie.set('klogo', 1, 365, '/u/', window.location.host);
	},
	vshare: function(event){
		if(!islogin()) {
			login(function() {window.location.reload()});
			return;
		}

		this.source = Element.extend(Event.element(event));
		if(!this.qwindow)this.qwindow = this._createwin();
		var folderId = 0;
		if(window.location.href.match(/playlists/i)){
			try{ if(hz)hz.postHz(4008063,1000707); }catch(e){};
			var temp = $("cont6").innerHTML,titleE=this.source.up("tr").down(".tpl_video .v_title a"),url=titleE.href,title = titleE.title,eid="";
			var foldervideos = $('foldervideos');
			if(foldervideos)folderId = foldervideos.readAttribute("_fid");
		}else{
			try{hz.handler_object(1,'share_video')}catch(e){};
			var temp = $("cont6").innerHTML,titleE=this.source.up("tr").down(".m_video .v_title a"),url=titleE.href,title = titleE.title,eid="";
		}


		var myregexp = /id_([^.]+).html/i;
		var match = myregexp.exec(url);
		if (match != null)eid = match[1];
		/*
		 temp = temp.replace(/%url/ig, url);
		 temp = temp.replace(/%title/ig, title);
		 temp = temp.replace(/%eid/ig, eid);
		 */
		nova_request(function(res) {
			if(!res) return;
			this.qwindow
				.setSize(600,210)
				.setContent("html", res)
				.showHandle()
				.show();
		}.bind(this), '/u/videos/videoshare', {"eid":eid,"title":title,"fid":folderId}, 'post');
	},
	copy2Clipboard: function(obj){
		var tempval = $(obj).up(".item").down("input"),copyerror = $(obj).up(".managershare").down(".copyerror");
		try{
			copyerror.style.display = 'block';
			if(YKUC.copy2ClipboardExec(tempval.value)!=false){
				copyerror.innerHTML = '复制成功！';
			}else{
				copyerror.innerHTML = '复制失败，请选中文字，在右键菜单中选择复制或按Ctrl+C复制';
				tempval.select();
			}
		}catch(e){
			copyerror.innerHTML = '复制失败，请选中文字，在右键菜单中选择复制或按Ctrl+C复制';
			tempval.select();
		}
	},
	videoListActionSingle: function(ele,type,subtype){
		//wrx
		var ele = $(ele);
		var inputlist = $("videolist").select('.check input');
		inputlist.each(function(o){
			if(o.checked == true){
				o.checked = false;
				o.istrue  = 1;
			}
		});
		ele.up("tr").down(".check input").checked = true;
		this.videoListAction(type,subtype);
		if(type == 'deleteVideo'){
			try{
				inputlist.each(function(o){
					if(o.istrue == 1){
						o.checked = true;
						o.istrue  = null;
					}
				});
			}catch(e){};
		}
	},
	showContentidTips: function(){
		//wrx
		var htmlString = '<div class="manager_tips">\
						<div class="tips_title">无法加入视频认领:</div>\
						<div class="tips_content">视频加入广告分成，则自动加入视频认领。请确保该视频为原创或合法授权视频，且不含广告。</div>\
					</div>';

		if(!this.qwindow)this.qwindow = this._createwin();
		this.qwindow
			.setSize(360,110)
			.setContent("html", htmlString)
			.hideMask()
			.show();
	},
	screenshot: function(){
		try{hz.handler_object(1,'screenshot')}catch(e){};
		var isplay,fstat,vstat,isPause,playerId="pswf_screenshot",screenshot=$$('[_mg="screenshot"]')[0],loading = '<span class="ico__loading_16" style="width:20px;margin-left:10px;"></span>';
		//this.source = Element.extend(Event.element(event));
		function _player(moviename) {
			if(moviename)
				return $(moviename);
			else
				return $(playerId);
			//return $(moviename?moviename:playerId);
			if (navigator.appName.indexOf("Microsoft") != -1)return window[moviename?moviename:playerId];
			return document[moviename?moviename:playerId];
		};
		//isPause = _player().isPause();
		isPause = false; //暂停也可截图
		if(isPause){
			if(!this.qwindow)this.qwindow = this._createwin();
			this.qwindow
				.setSize(320,120)
				.setContent("html", document.getElementById("video_tips").innerHTML)
				.showHandle()
				.show();

		}else{
			_player().pauseVideo(true);
			fstat = _player().getPlayerState();
			fstat = fstat.split(/\|/);
			/*
			 if(parseInt('0x'+fstat[0].substr(10,8)) < 1335715200){
			 if(!this.qwindow)this.qwindow = this._createwin();
			 this.qwindow
			 .setSize(240,110)
			 .setContent("html", document.getElementById("cont5").innerHTML)
			 .showHandle()
			 .show();
			 return;
			 }
			 */
			vstat = _player().getNsData();
			screenshot.down('.mask').style.display = 'block';
			//screenshot.down('.pic').style.display = 'block';
			screenshot.down('.loading').style.display = 'block';
			mg._screenshot_able('no');
			nova_request(function(res) {
				//mg._screenshot_able('ok');
				if(!res) return;
				res = typeof res == 'object' ? res : res.stripScripts().evalJSON(true);
				if(res.error == 1){
					this.shotDetail = {"p":vstat.vid,"ts":fstat[fstat.length-1],"s":'big',"f":fstat[0]};
					screenshot.down('.panel').style.display = 'block';
					screenshot.down('.pic').innerHTML = '<img src="' + res.src + '" _logo="' + res.id + '">';
					screenshot.down('.pic').style.display = 'block';
					screenshot.down('.loading').style.display = 'none';
				}else{
					alert('失败');
					screenshot.down('.mask').style.display = 'none';
					screenshot.down('.pic').style.display = 'none';
					screenshot.down('.loading').style.display = 'none';
				}
			}.bind(this), '/u/videos/shot', {"p":vstat.vid,"ts":fstat[fstat.length-1],"s":'big',"f":fstat[0]}, 'post');

			//alert(fstat[2]+'---'+fstat[4]+'--'+fstat[0]);

		}
	},
	_screenshot_able: function(type){
		if(type == 'ok'){
			$('shot_btn').removeClassName('btn_disable');
			$('shot_btn').onclick = function(){
				mg.screenshot();
			};
		}else{
			$('shot_btn').addClassName('btn_disable');
			$('shot_btn').onclick = function(){
			};
		}
	},
	shotok: function(event){
		this.source = Element.extend(Event.element(event));
		try{hz.handler_object(this.source)}catch(e){};
		mg._screenshot_able('ok');
		var screenshot=$$('[_mg="screenshot"]')[0];
		this.source = Element.extend(Event.element(event));
		screenshot.down('.mask').style.display = 'none';
		screenshot.down('.pic').style.display = 'none';
		screenshot.down('.panel').style.display = 'none';
		$('logo_e').down('img').src = screenshot.down('.pic').down('img').src;
		$('logo_e').down('img').writeAttribute('_logo',screenshot.down('.pic').down('img').readAttribute('_logo'));

		var klogocookie = Nova.Cookie.get('klogo');
		if(!klogocookie || klogocookie != 1){
			if($('logo_e').down('.post-tips'))$('logo_e').down('.post-tips').style.display = 'block';
		}
		$('logorevert').innerHTML = '<a href="javascript:;" _click="revertlogo">还原</a>';
		$('isvaluechange').innerHTML = 1;
	},
	shotno: function(event){
		this.source = Element.extend(Event.element(event));
		try{hz.handler_object(this.source)}catch(e){};
		mg._screenshot_able('ok');
		var screenshot=$$('[_mg="screenshot"]')[0];
		this.source = Element.extend(Event.element(event));
		screenshot.down('.mask').style.display = 'none';
		screenshot.down('.pic').style.display = 'none';
		screenshot.down('.panel').style.display = 'none';
	},
	setpass: function(event){
		//this.source = Element.extend(Event.element(event));
		$('lockPasswd').style.display = 'inline-block';
		/*付费视频*/
		var _event = jQuery(event);
		if(jQuery('#feeselect'))
		{
			if(_event.attr('id') == 'privacy-fee')
			{
				jQuery('#feeselect').show();
			}else{
				jQuery('#feeselect').hide();
			}
		}
		if(jQuery('#download_fee_1') && jQuery('#download_fee_2'))
		{
			if(_event.attr('id') == 'privacy-fee')
			{
				jQuery('#download_fee_1').hide();
				jQuery('#download_fee_2').show();
			}else{
				jQuery('#download_fee_1').show();
				jQuery('#download_fee_2').hide();
			}
		}
		/*付费视频*/
	},
	setnopass: function(event){
		//this.source = Element.extend(Event.element(event));
		$('lockPasswd').style.display = 'none';
		//$('showdvderror').hide();
		/*付费视频*/
		var _event = jQuery(event);
		if(jQuery('#feeselect'))
		{
			if(_event.attr('id') == 'privacy-fee')
			{
				jQuery('#feeselect').show();
			}else{
				jQuery('#feeselect').hide();
			}
		}
		if(jQuery('#download_fee_1') && jQuery('#download_fee_2'))
		{
			if(_event.attr('id') == 'privacy-fee')
			{
				jQuery('#download_fee_1').hide();
				jQuery('#download_fee_2').show();
			}else{
				jQuery('#download_fee_1').show();
				jQuery('#download_fee_2').hide();
			}
		}
		/*付费视频*/
	},
	/*付费视频*/
	fee_confirm:function(){
		if(!this.qwindow)this.qwindow = this._createwin();
		this.qwindow
			.setSize(220,150)
			.setContent("html", document.getElementById("fee_confirm").innerHTML)
			.showHandle()
			.show();
		this.qwindow.showMask();
	},
	fee_confirm_ok:function(){
		this.qwindow.hide();
		this.modifyVideo();
	},
	/*付费视频*/
	edit_submit: function(event){
		if(event && event == 'ok'){
			$('isvaluechange').innerHTML = '';
			try{this._checkEditChangeSomeValue();}catch(e){};
			$('video_edit_form').submit();
		}else{
			try{hz.handler_object(1,'edit_commit')}catch(e){};
			/*付费视频*/
			// var video = document.forms['video'];
			// var form_data = $(video).serialize(true);
			// if(select_fee == 'fee' && form_data.privacy != 'fee')
			// //	if(form_data.privacy != 'fee')
			// {
			// 	this.fee_confirm();
			// }else{
			// 	this.modifyVideo();
			// }
			/*付费视频*/
			this.modifyVideo();
		}
	},
	bullet_submit: function(event){
		var video = document.forms['bullet_edit_form'];
		var form_data = $(video).serialize(true);
		if(!validatePrivacySetting()){
			return;
		}
		nova_request(function(res){
			console.log(res);
			if (res == "ok") {
				$('bullet_edit_form').submit();
			} else {
				if(res==='-77776' || res===-77776){
					var endTimeField = jQuery('[data-js=privacySubFromTime]');
					endTimeField.parent().addClass('manage__error');
					endTimeField.parent().find('[data-js=errorField]').text('试看时长不得少于30秒');
				}else{
					$('submitError').style.display = 'block';
					$('bullet_edit_form').onclick = function(){
						$('submitError').style.display = 'none';
					}
				}
			}
		}, "/u/videos/doSetBullet", form_data, 'post');
	},
	_checkEditChangeSomeValue: function(funType){
		var _this = this, publicType = 0,objPublicType = document.getElementsByName('publictype');
		if(objPublicType!=null){
			var i;
			for(i=0;i<objPublicType.length;i++){
				if(objPublicType[i].checked){
					publicType = objPublicType[i].value;
					break;
				}
			}
			if(funType == 'init'){
				this.publicType = publicType;
				this.lockPasswd = document.getElementById('lockPasswd').value;
			}else{
				if(publicType != _this.publicType){
					try{ if(hz)hz.postHz(4008111,1000529); }catch(e){};
				}else if(publicType == _this.publicType && publicType == 4){
					var lockPasswd = document.getElementById('lockPasswd');
					if(lockPasswd.value != _this.lockPasswd){
						try{ if(hz)hz.postHz(4008111,1000529); }catch(e){};
					}
				}
			}
		}
		/*
		 var videoCate = '',objVideoCate = document.getElementsByName('v_syscate[]');
		 if(objVideoCate!=null){
		 var i;
		 for(i=0;i<objVideoCate.length;i++){
		 if(objVideoCate[i].checked){
		 videoCate = objVideoCate[i].value;
		 break;
		 }
		 }
		 if(funType == 'init'){
		 this.videoCate = videoCate;
		 }else{
		 if(videoCate != _this.videoCate){
		 try{ if(hz)hz.postHz(4008110,1000529); }catch(e){};
		 }
		 }
		 }
		 */
	},
	edit_cancel: function(event){
		try{hz.handler_object(1,'edit_cancle')}catch(e){};
		window.opener=null;
		window.open('', '_self', '');
		window.close();
	},
	cancelok: function(event){
		window.opener=null;
		window.open("","_self")
		window.close();
	},
	cancelno: function(event){
		this.qwindow.hide(event);
	},
	//list func
	check_all: function(id){
		var ele;
		if(id == 2){
			ele = $('check_all_foot');
		}else{
			ele = $('check_all');
		}

		var videolist = $('videolist');
		if(!videolist)return;
		if(ele.checked == true){
			videolist.select('.check input').each(function(o){
				if(o.disabled == false){
					o.checked = true;
					o.up('tr').addClassName('highlight');
				}
			}.bind(this));
			$('check_all').checked = true;
			//$('check_all_foot').checked = true;
		}else{
			videolist.select('.check input').each(function(o){
				o.checked = false;
				o.up('tr').removeClassName('highlight');
			}.bind(this));
			$('check_all').checked = false;
			//$('check_all_foot').checked = false;
		}
	},
	dropmenu: function(event){
		if(window.location.href.match(/playlists/i)){
			try{ if(hz)hz.postHz(4008047,1000707); }catch(e){};
		}
		this.source = Element.extend(Event.element(event));
		var panel = $('panel');
		function toggle(o){
			if(!o)return;
			if(o.style.display == 'none'){
				o.style.display = 'block';
			}else{
				o.style.display = 'none';
			}
		}
		toggle(panel);
		Event.stop(event);
	},
	actionListRewrite: function(){
		//wrx
		var actionListRewrite = $('actionListRewrite');
		if(!actionListRewrite)return;
		actionListRewrite.select('li').each(function(o){
			var a = o.down('a');
			if(a){
				Event.observe(o, 'click', function(){
					window.location = a.href;
					return false;
				}.bind(this));
			}
		}.bind(this));

	},
	videoListBullet: function(bullet){
		var videolist = $('videolist'),videoids = new Array(),videoidsE = new Array(),videoidsStr='';
		if(bullet!=0&&bullet!=1){
			bullet = 0;
		}
		if(!videolist){
			if(!this.qwindow)this.qwindow = this._createwin();
			this.qwindow
				.setSize(190,60)
				.setContent("html", document.getElementById("cont503").innerHTML)
				.hideHandle()
				.hideMask()
				.show();
			$(this.qwindow.dom.winbody).down('.tips_title').innerHTML = '<span class="ico__fail"><em>提示</em></span>您还没有勾选视频';

			var _timeoutWindow = this.qwindow;
			delete this.qwindow;
			setTimeout(function(){
				_timeoutWindow.hide();
			}.bind(this), 3000);
			return;
		}
		videolist.select('.check input').each(function(o){
			if(o.checked == true){
				videoids.push(o.value);
				videoidsStr += o.value + '|';
				videoidsE.push(o.up('tr'));
			}
		}.bind(this));
		this.videoids = videoidsStr.replace(/\|$/ig, "");
		this.videoidsE = videoidsE;
		if(!this.qwindow)this.qwindow = this._createwin();
		if(videoids.length >= 1){
			nova_request(function(res) {
				this.qwindow.hide();
				if(res != 1){
					this.qwindow
						.setSize(240,110)
						.setContent("html", document.getElementById("cont503").innerHTML)
						.showHandle()
						.show();
				}else{
					this.qwindow
						.setSize(130,60)
						.setContent("html", document.getElementById("cont403").innerHTML)
						.hideHandle()
						.hideMask()
						.show();
					var _timeoutWindow = this.qwindow;
					delete this.qwindow;
					setTimeout(function(){
						_timeoutWindow.hide();
					}.bind(this), 3000);
					window.location = window.location.href;
				}
			}.bind(this), '/u/videos/bullets', {"vids":this.videoids,"bullet":bullet}, 'post');
		}else{
			this.qwindow
				.setSize(190,60)
				.setContent("html", document.getElementById("cont3").innerHTML)
				.hideHandle()
				.hideMask()
				.show();
			$(this.qwindow.dom.winbody).down('.tips_title').innerHTML = '<span class="ico__fail"><em>提示</em></span>您还没有勾选视频';

			var _timeoutWindow = this.qwindow;
			delete this.qwindow;
			setTimeout(function(){
				_timeoutWindow.hide();
			}.bind(this), 3000);
		}
		location.reload();
	},
	videoListAction: function(type,subtype){
		//wrx
		var videolist = $('videolist'),videoids = new Array(),videoidsE = new Array(),videoidsStr='';
		var subtype = subtype || '';
		var typeList =  {
			"deleteVideo":{"isSure":1,"textInit":"您将删除%s个视频，请输入登录密码确认。","text1":"您确定要删除此视频么？","textn":"您将删除%s个视频，请确认。","wInit":360,"hInit":150,"w1":240,"h1":105,"wn":265,"hn":105},
			"deleteVideoWithPromotion":{"isSure":1,"textInit":"您将删除%s个视频，请输入登录密码确认。<br/>*所选其中包括后贴素材视频，删除后该视频会自动从后贴素材库中移除。","text1":"您确定要删除此后贴素材视频么？删除后该视频会自动从后贴素材库中移除。","textn":"您将删除%s个视频，其中包括后贴素材视频。删除后该视频会自动从后贴素材库中移除。请确认。","wInit":360,"hInit":184,"w1":360,"h1":124,"wn":360,"hn":124},
			"addShare":{"isSure":1,"textInit":"您将添加%s个视频分成，请输入登录密码确认。","text1":"您确定要添加此视频到分成么？","textn":"您将添加%s个视频分成，请确认。","wInit":380,"hInit":150,"w1":275,"h1":105,"wn":275,"hn":105},
			"deleteShare":{"isSure":1,"textInit":"您将删除%s个视频的分成，请输入登录密码确认。","text1":"您确定要删除此视频的分成么？","textn":"您将删除%s个视频的分成，请确认。","wInit":380,"hInit":150,"w1":275,"h1":105,"wn":300,"hn":105},
			"postSubscribe":{"isSure":1,"textInit":"您将推送%s个视频，请输入登录密码确认。","text1":"您确定要推送此视频么？","textn":"您将推送%s个视频，请确认。","wInit":360,"hInit":150,"w1":240,"h1":105,"wn":265,"hn":105}
		};
		if(!videolist){
			if(!this.qwindow)this.qwindow = this._createwin();
			this.qwindow
				.setSize(190,60)
				.setContent("html", document.getElementById("cont3").innerHTML)
				.hideHandle()
				.hideMask()
				.show();
			$(this.qwindow.dom.winbody).down('.tips_title').innerHTML = '<span class="ico__fail"><em>提示</em></span>您还没有勾选视频';

			var _timeoutWindow = this.qwindow;
			delete this.qwindow;
			setTimeout(function(){
				_timeoutWindow.hide();
			}.bind(this), 3000);
			return;
		}
		this.v_m_p =Nova.Cookie.get('v_m_p');
		var precheckError = false;
		videolist.select('.check input').each(function(o){
			if(o.checked == true){
				videoids.push(o.value);
				videoidsStr += o.value + '|';
				videoidsE.push(o.up('tr'));
				if(jQuery(o).closest('tr').data('promotionVideo')===true){
					if(precheckError !=='hasPromotionVideoInuse'){
						precheckError ='hasPromotionVideo';
					}
				}
				if(jQuery(o).closest('tr').data('promotionInuse')===true){
					precheckError ='hasPromotionVideoInuse';
				}
			}
		}.bind(this));
		this.videoids = videoidsStr.replace(/\|$/ig, "");
		this.videoidsE = videoidsE;

		if(!this.qwindow)this.qwindow = this._createwin();
		

		
		if(videoids.length >= 1){
			if(precheckError){
				if(precheckError==='hasPromotionVideo'){
				this.qwindow
					.setSize(typeList['deleteVideoWithPromotion'].wInit,typeList['deleteVideoWithPromotion'].hInit)
					.setContent("html", document.getElementById("cont1").innerHTML)
					.showHandle()
					.show();
				this.qwindow.showMask();
					if(1 == this.v_m_p){
						$(this.qwindow.dom.winbody).down('.tips_content').style.display ='none';
						$(this.qwindow.dom.winbody).down('.tips_action').innerHTML = $(this.qwindow.dom.winbody).down('.tips_action').innerHTML.replace(/%s/ig, 'deleteVideoWithPromotion').replace(/%g/ig, subtype);
						if(videoids.length == 1){
							this.qwindow.setSize(typeList['deleteVideoWithPromotion'].w1,typeList['deleteVideoWithPromotion'].h1);
							$(this.qwindow.dom.winbody).down('.tips_title').innerHTML = '<span class="ico__fail"><em>提示</em></span>'+ typeList['deleteVideoWithPromotion'].text1;
						}else{
							this.qwindow.setSize(typeList['deleteVideoWithPromotion'].wn,typeList['deleteVideoWithPromotion'].hn);
							$(this.qwindow.dom.winbody).down('.tips_title').innerHTML = '<span class="ico__fail"><em>提示</em></span>'+ typeList['deleteVideoWithPromotion'].textn.replace(/%s/ig, videoids.length);
						}
					}else{
						$(this.qwindow.dom.winbody).down('.tips_title').innerHTML = '<span class="ico__fail"><em>提示</em></span>'+ typeList['deleteVideoWithPromotion'].textInit.replace(/%s/ig, videoids.length);
						$(this.qwindow.dom.winbody).down('.tips_action').innerHTML = $(this.qwindow.dom.winbody).down('.tips_action').innerHTML.replace(/%s/ig, 'deleteVideoWithPromotion').replace(/%g/ig, subtype);
					}
					return;	
				}else{
					if(precheckError=='hasPromotionVideoInuse'){
						this.qwindow
							.setSize(360,124)
							.setContent("html", jQuery('#contPromotionInUse').html())
							.showHandle()
							.show();
						return;
					}
				}
			}else{
				if(typeList[type].isSure == 1){
					this.qwindow
						.setSize(typeList[type].wInit,typeList[type].hInit)
						.setContent("html", document.getElementById("cont1").innerHTML)
						.showHandle()
						.show();
					this.qwindow.showMask();
					if(1 == this.v_m_p){
						$(this.qwindow.dom.winbody).down('.tips_content').style.display ='none';
						$(this.qwindow.dom.winbody).down('.tips_action').innerHTML = $(this.qwindow.dom.winbody).down('.tips_action').innerHTML.replace(/%s/ig, type).replace(/%g/ig, subtype);
						if(videoids.length == 1){
							this.qwindow.setSize(typeList[type].w1,typeList[type].h1);
							$(this.qwindow.dom.winbody).down('.tips_title').innerHTML = '<span class="ico__fail"><em>提示</em></span>'+ typeList[type].text1;
						}else{
							this.qwindow.setSize(typeList[type].wn,typeList[type].hn);
							$(this.qwindow.dom.winbody).down('.tips_title').innerHTML = '<span class="ico__fail"><em>提示</em></span>'+ typeList[type].textn.replace(/%s/ig, videoids.length);
						}
					}else{
						$(this.qwindow.dom.winbody).down('.tips_title').innerHTML = '<span class="ico__fail"><em>提示</em></span>'+ typeList[type].textInit.replace(/%s/ig, videoids.length);
						$(this.qwindow.dom.winbody).down('.tips_action').innerHTML = $(this.qwindow.dom.winbody).down('.tips_action').innerHTML.replace(/%s/ig, type).replace(/%g/ig, subtype);
					}
				}else{
					this.videoListActionOk(type,subtype);
				}
			}
		}else{
			this.qwindow
				.setSize(190,60)
				.setContent("html", document.getElementById("cont3").innerHTML)
				.hideHandle()
				.hideMask()
				.show();
			$(this.qwindow.dom.winbody).down('.tips_title').innerHTML = '<span class="ico__fail"><em>提示</em></span>您还没有勾选视频';

			var _timeoutWindow = this.qwindow;
			delete this.qwindow;
			setTimeout(function(){
				_timeoutWindow.hide();
			}.bind(this), 3000);
		}
	},
	videoListActionOk: function(type,subtype){
		//wrx
		var passwd = $(this.qwindow.dom.winbody).down('.form_input').value;
		if(!type)return;
		var subtype =subtype||'';
		nova_request(function(res) {
			if(1 == res){
				Nova.Cookie.set('v_m_p', 1, 1/24, '/u/', window.location.host);
			}
			if(1 == this.v_m_p || 1 == res){
				switch(type){
					case 'deleteVideo':
					case 'deleteVideoWithPromotion':
						nova_request(function(res) {
							this.qwindow.hide();
							if(res != 1){
								var errorTest;
								if(res == -4){
									errorTest = document.getElementById("cont501").innerHTML;
								}else{
									errorTest = document.getElementById("cont5").innerHTML;
								}
								this.qwindow
									.setSize(240,110)
									.setContent("html", errorTest)
									.showHandle()
									.show();
								if(res == -4){
									$(this.qwindow.dom.winbody).down('.tips_action').innerHTML = '<div onclick="mg.unrecommendok('+this.videoids+')" class="form_btn form_btn_s form_btnmaj_s">\
															<span class="form_btn_text">申请解除推荐</span>\
														</div>\
														<div onclick="mg.qwindow.hide()" class="form_btn form_btn_s form_btnsub_s">\
															<span class="form_btn_text">取消</span>\
														</div>';
								}
							}else{
								for(i=0; i<this.videoidsE.length; i++){
									if(this.videoidsE[i].readAttribute("_mgrecoment")){
										this.videoidsE[i].down(".l_b_v_c").innerHTML = "正在推荐&#12288;<em></em>不可删除";
									}else{
										this.videoidsE[i].remove();
									}
								}
								this.qwindow
									.setSize(130,60)
									.setContent("html", document.getElementById("cont4").innerHTML)
									.hideHandle()
									.hideMask()
									.show();
								var _timeoutWindow = this.qwindow;
								delete this.qwindow;
								setTimeout(function(){
									_timeoutWindow.hide();
								}.bind(this), 3000);
								var tempvideolist = $('videolist').select("tr");
								if(tempvideolist.length>0){
									for(i=0; i<tempvideolist.length; i++){
										if(i%2 == 0){
											tempvideolist[i].removeClassName("manager_even");
										}else{
											tempvideolist[i].addClassName("manager_even");
										}
									}
								}else{
									if ( window.location.href.match(/videos\/lost/im)) {
										window.location="/u/videos/lost";
									} else {
										window.location="/u/videos";
									}
								}
							}
							return;
						}.bind(this), '/u/videos/videolistaction', {"vids":this.videoids,"acttype":type}, 'post');
						break;
					default :
						nova_request(function(res) {
							this.qwindow.hide();
							if(res != 1){
								this.qwindow
									.setSize(240,110)
									.setContent("html", document.getElementById("cont503").innerHTML)
									.showHandle()
									.show();
							}else{
								this.qwindow
									.setSize(130,60)
									.setContent("html", document.getElementById("cont403").innerHTML)
									.hideHandle()
									.hideMask()
									.show();
								var _timeoutWindow = this.qwindow;
								delete this.qwindow;
								setTimeout(function(){
									_timeoutWindow.hide();
								}.bind(this), 3000);
								window.location = window.location.href;
							}
						}.bind(this), '/u/videos/videolistaction', {"vids":this.videoids,"acttype":type,"pv":subtype}, 'post');
						break;
				}
				return;
			}else{
				var passE = $(this.qwindow.dom.winbody).down('.form_input'),passErrorE = $(this.qwindow.dom.winbody).down('.error');
				passErrorE.style.display = 'block';
				if(passwd == ''){passErrorE.innerHTML = '请输入密码';}else{passErrorE.innerHTML = '密码错误，请检查';};
				var curSize = this.qwindow.getSize();

				this.qwindow.setSize(curSize.width,curSize.height+20);

				passE.addClassName('form_input_error');
				passE.onfocus = function(o){
					passE.removeClassName('form_input_error');
					var curSizeE = this.qwindow.getSize();
					this.qwindow.setSize(curSizeE.width,curSizeE.height-20);
					passErrorE.style.display  = 'none';
				}.bind(this);
				return;
			}
		}.bind(this), '/u/videos/verifypass', {"passwd":passwd}, 'post');
		return;
	},
	getPlaylit: function(o){
		this.source = $(o);
		try{hz.handler_object(1,'add_playlist')}catch(e){};
		var page = this.source.readAttribute('_p'),videosMaxNum=200,avilableNum=0;
		if(page == 0){
			var videoids='',videolist = $('videolist');
			if(!videolist){
				if(!this.qwindow)this.qwindow = this._createwin();
				this.qwindow
					.setSize(190,60)
					.setContent("html", document.getElementById("cont3").innerHTML)
					.hideHandle()
					.hideMask()
					.show();
				$(this.qwindow.dom.winbody).down('.tips_title').innerHTML = '<span class="ico__fail"><em>提示</em></span>您还没有勾选视频';

				var _timeoutWindow = this.qwindow;
				delete this.qwindow;
				setTimeout(function(){
					_timeoutWindow.hide();
				}.bind(this), 3000);
				return;
			}
			this.videosNum=0;
			videolist.select('.check input').each(function(o){
				if(o.checked == true){
					videoids += o.value + '|';
					++this.videosNum;
				}
			}.bind(this));
			videoids = videoids.replace(/\|$/ig, "");
			if(videoids == ''){
				if(!this.qwindow)this.qwindow = this._createwin();
				this.qwindow
					.setSize(190,60)
					.setContent("html", document.getElementById("cont3").innerHTML)
					.hideHandle()
					.hideMask()
					.show();
				$(this.qwindow.dom.winbody).down('.tips_title').innerHTML = '<span class="ico__fail"><em>提示</em></span>您还没有勾选视频';
				var _timeoutWindow = this.qwindow;
				delete this.qwindow;
				setTimeout(function(){
					_timeoutWindow.hide();
				}.bind(this), 3000);
				return;
			}

			if(!this.PlaylistW)this.PlaylistW= this._createwin();
			this.PlaylistW
				.setSize(650,560)
				.setContent("html", document.getElementById("listEditBox").innerHTML)
				.showHandle();
			this.PlaylistW.submit = function(){
				var playlistids='',l_b_select = $(this.PlaylistW.dom.winbody).down('.l_b_select');
				l_b_select.select('li input').each(function(o){
					if(o.checked == true){
						playlistids += o.value + '|';
					}
				}.bind(this));
				playlistids = playlistids.replace(/\|$/ig, "");
				if(playlistids == ''){
					alert('你没有选择任何播单！');
					return;
				}
				nova_request(function(res) {
					this.PlaylistW.hide();
					if ( window.location.href.match(/success\/unsort/im)) {
						videolist.select('.check input').each(function(o){
							if(o.checked == true){
								o.up('tr').remove();
							}
						}.bind(this));
						var tempvideolist = $('videolist').select("tr");
						if(tempvideolist.length<1)
							window.location="/u/videos/success/unsort";
					} else {
						videolist.select('.check input').each(function(o){
							if(o.checked == true){
								o.checked = false;
								o.up('tr').removeClassName('highlight');
							}
						}.bind(this));
					}
					$('check_all').checked = false;
					if($('check_all_foot'))$('check_all_foot').checked = false;

					if(!this.qwindow)this.qwindow = this._createwin();
					this.qwindow
						.setSize(130,60)
						.setContent("html", document.getElementById("cont4").innerHTML)
						.hideHandle()
						.hideMask()
						.show();
					$(this.qwindow.dom.winbody).down('.tips_title').innerHTML = '<span class="ico__success"><em>提示</em></span>添加成功';

					var _timeoutWindow = this.qwindow;
					delete this.qwindow;
					setTimeout(function(){
						_timeoutWindow.hide();
					}.bind(this), 3000);
				}.bind(this), '/u/videos/addvideo2folder', {"vids":videoids,"pids":playlistids}, 'post');
			}.bind(this);
		}
		if(!page || page < 1)page=1;
		nova_request(function(res) {
			//初始化
			$(this.PlaylistW.dom.winbody).down('.l_b_Pager').innerHTML = res.pager;
			var htmlstr = '',l_b_all = $(this.PlaylistW.dom.winbody).down('.l_b_all'),l_b_select = $(this.PlaylistW.dom.winbody).down('.l_b_select'),l_b_ex = $(this.PlaylistW.dom.winbody).down('.l_b_ex'),l_b_sub = $(this.PlaylistW.dom.winbody).down('.l_b_sub'),disableStr,disableStr2,disableStr3;
			for(var i = 0;i < res.list.length;i++){
				avilableNum = videosMaxNum - res.list[i].contentTotal;
				disableStr = avilableNum >= this.videosNum ? '': ' disable';
				disableStr2 = avilableNum >= this.videosNum ? '': ' disabled';
				disableStr3 = avilableNum >= this.videosNum ? '': ' _num="'+res.list[i].contentTotal+'"';
				if(i%2 == 0){
					htmlstr +='<li class="odd'+ disableStr +'" '+disableStr3+'><div><input '+disableStr2+' type="checkbox" value="'+ res.list[i].folderId +'"></div><span title="'+res.list[i].folderName+'">'+res.list[i].folderShortName+'<span class="num">('+res.list[i].contentTotal+')</span></span></li>';
				}else{
					htmlstr +='<li class="even'+ disableStr +'" '+disableStr3+'><div><input '+disableStr2+' type="checkbox" value="'+ res.list[i].folderId +'"></div><span title="'+res.list[i].folderName+'">'+res.list[i].folderShortName+'<span class="num">('+res.list[i].contentTotal+')</span></span></li>';
				}
			}
			l_b_ex.innerHTML = '将'+this.videosNum+'个视频添加到播单';
			l_b_all.innerHTML = htmlstr;
			l_b_all.select('li').each(function(o){
				checkint = 0;
				l_b_select.select('li').each(function(o2){
					if(o.down('input').value == o2.down('input').value)checkint = 1;
				}.bind(this));
				if(checkint == 1){
					o.down('input').checked = true;
				}else{
					o.down('input').checked = false;
				}
			}.bind(this));

			//添加事件
			l_b_all.select("li").each(function(o){
				o.down('input').onclick = function(){
					if(o.down('input').checked == true){
						l_b_select.innerHTML = '<li class="odd">'+o.innerHTML+'</li>';
						l_b_select.select("li").each(function(os){os.down('input').checked = true;});
						l_b_all.select("li").each(function(oo){
							if(o.down('input').value != oo.down('input').value){
								oo.addClassName('disable');
								oo.down('input').disabled = true;
							}
						}.bind(this));
					}else{
						l_b_select.innerHTML = '';
						l_b_all.select("li").each(function(oo){
							if(oo.readAttribute('_num')){
								oo.addClassName('disable');
								oo.down('input').disabled = true;
							}else{
								oo.removeClassName('disable');
								oo.down('input').disabled = false;
							}
						}.bind(this));
					}
					mg._playlist_isdata();
				}
			});

			if(l_b_select.select('li').length > 0){
				l_b_all.select('li').each(function(o){
					if(o.down('input').checked != true){
						o.addClassName('disable');
						o.down('input').disabled = true;
					}
				}.bind(this));
			}
			mg._playlist_isdata();
			this.PlaylistW.show();
		}.bind(this), '/u/videos/listfolder', {"pl":page}, 'get');
	},
	PlaylistS: function(type){
		if(!this.PlaylistW)return;
		var checkint = 0,l_b_all = $(this.PlaylistW.dom.winbody).down('.l_b_all'),l_b_select = $(this.PlaylistW.dom.winbody).down('.l_b_select'),l_b_sub = $(this.PlaylistW.dom.winbody).down('.l_b_sub'),
			l_b_Pager = $(this.PlaylistW.dom.winbody).down('.l_b_Pager'),menus = $(this.PlaylistW.dom.winbody).down('.menus');
		if(type == 1){
			menus.innerHTML = '<li><a onclick="mg.PlaylistS(0);">全部</a></li><li class="current"><span>已选</span></li>';
			l_b_all.style.display = 'none';
			l_b_Pager.style.display = 'none';
			l_b_select.style.display = 'block';
			l_b_select.select('li').each(function(o){
				o.onclick = function(){o.remove();mg._playlist_isdata();}.bind(this);
			}.bind(this));
		}else{
			menus.innerHTML = '<li class="current"><span>全部</span></li><li><a onclick="mg.PlaylistS(1);">已选</a></li>';
			l_b_all.style.display = 'block';
			l_b_Pager.style.display = 'block';
			l_b_select.style.display = 'none';

			l_b_all.select('li').each(function(o){

				if(o.readAttribute('_num')){
					o.addClassName('disable');
					o.down('input').disabled = true;
				}else{
					o.removeClassName('disable');
					o.down('input').disabled = false;
				}
				o.down('input').checked = false;
				l_b_select.select('li').each(function(o2){
					if(o.down('input').value == o2.down('input').value && o2.down('input').checked == true){
						o.down('input').checked = true;
					}else{
						o.down('input').checked = false;
					}
				}.bind(this));
			}.bind(this));
			if(l_b_select.select('li').length > 0){
				l_b_all.select('li').each(function(o){
					if(o.down('input').checked != true){
						o.addClassName('disable');
						o.down('input').disabled = true;
					}
				}.bind(this));
			}
		}
		mg._playlist_isdata();
	},
	_playlist_isdata: function(){
		var l_b_all = $(this.PlaylistW.dom.winbody).down('.l_b_all'),l_b_select = $(this.PlaylistW.dom.winbody).down('.l_b_select'),l_b_sub = $(this.PlaylistW.dom.winbody).down('.l_b_sub');
		if(l_b_select.select('li').length > 0){
			l_b_sub.removeClassName('form_btn_disabled');
			l_b_sub.onclick = function(){
				mg.PlaylistW.submit();
			};
		}else{
			l_b_sub.addClassName('form_btn_disabled');
			l_b_sub.onclick = function(){
				//
			};
		}
	},
	unrecommend: function(vid){
		//wrx
		var vid = vid || 0;
		if(!this.qwindow)this.qwindow = this._createwin();
		this.qwindow
			.setSize(340,200)
			.setContent("html", document.getElementById("cont2").innerHTML)
			.showHandle()
			.show();
		$(this.qwindow.dom.winbody).down('.tips_action').innerHTML = '<div onclick="mg.unrecommendok('+vid+')" class="form_btn form_btn_s form_btnmaj_s">\
					<span class="form_btn_text">申请解除推荐</span>\
				</div>\
				<div onclick="mg.qwindow.hide()" class="form_btn form_btn_s form_btnsub_s">\
					<span class="form_btn_text">取消</span>\
				</div>';
	},
	unrecommendok: function(vid){
		//wrx
		var vid = vid || 0;
		var url = 'http://www.youku.com/service/feed/subtype_24?mvid=' + vid;
		this.qwindow.hide();
		window.open(url);
	},
	//inner func
	_createwin: function(){
		//wrx
		qwindow = new Qwindow({
			//'zindex': 2000,
			'elements': 'select',
			'showmask': true
		});
		return qwindow;
	},
	_alert: function(title,msg,eleid,eleids){
		if(eleids){
			$(eleid).addClassName('form_input_error');
			$(eleids.ele).scrollTo();
			$(eleids.pos).insert({after: $('input_error')});
			$('input_error').style.display = 'block';
			$('input_error').innerHTML = msg;
			$(eleids.eclick).onclick = function(o){
				$(eleid).removeClassName('form_input_error');
				$('input_error').style.display = 'none';
			}
			$(eleids.efocus).onfocus = function(o){
				$(eleid).removeClassName('form_input_error');
				$('input_error').style.display = 'none';
			}
		}else{
			if(eleid){
				$(eleid).addClassName('form_input_error');
				$(eleid).onfocus = function(o){
					$(eleid).removeClassName('form_input_error');
					$('input_error').style.display = 'none';
				}
				$(eleid).insert({after: $('input_error')});
				$('input_error').style.display = 'block';
				$('input_error').innerHTML = msg;
				$(eleid).scrollTo();
			}
		}
	},
	getVideoError: function (code) {
		//http://wiki.1verge.net/webdev:ugc:video:service:error
		var errors = {
			"-10": {'field': 'verifyCode','msg': '验证码错误，请您重新输入！'},
			"-101": {'field': 'download_disabled','msg': '推荐视频不能修改权限，你可以<a href="http://www.youku.com/service/feed/subtype_24?mvid=192522009" target="_blank">申请解除推荐</a>'},
			"-204": {'field': 'description','msg': '视频已被网站推荐，不能修改信息！请与网站内容部门联系！'},
			"-300": {'field': 'title','msg': '标题不可以为空'},
			"-301": {'field': 'title','msg': '标题最多允许80个字'},
			"-303": {'field': 'title','msg': '标题含有禁忌词汇'},
			"-310": {'field': 'description','msg': '视频简介最多2000个字'},
			"-311": {'field': 'description','msg': '视频简介含有禁忌词汇'},
			"-321": {'field': 'tags','msg': '最多可以添加10个视频标签'},
			"-322": {'field': 'tags','msg': '单个标签最多20个字'},
			"-323": {'field': 'tags','msg': '单个标签最少1个字'},
			"-324": {'field': 'tags','msg': '标签含有禁忌词汇'},
			"-325": {'field': 'tags','msg': '标签含有无效字符'},
			"-340": {'field': 'password','msg': '密码不能为空'},
			"-341": {'field': 'password','msg': '密码最多32个字符'},
			"-342": {'field': 'password','msg': '密码只能使用数字、字母!'},
			"-2701": {'field': 'privacy-selfVip','msg': '推荐视频不能修改权限，你可以<a href="http://www.youku.com/service/feed/subtype_24?mvid=192522009" target="_blank">申请解除推荐</a>'},
			"-2700": {'field': 'privacy-selfVip','msg': '保存私密设置失败'}
		};
		return	errors[code] ? errors[code] : false;
	},
	showVideoError: function(field, msg){
		var node = $('video_edit_form')[field];
		node.addClassName('form_input_error');
		node.onfocus = function(o){
			node.removeClassName('form_input_error');
			$('input_error').style.display = 'none';
		}
		if (field == 'verifyCode') {
			node.parentNode.insert({after: $('input_error')});
		} else if(field == 'download_disabled'){
			node.up('ul').insert({after: $('input_error')});
		}else if(field == 'privacy-selfVip'){
			node.next().insert({after: $('input_error')});
		} else if(field == 'topic_info_error'){
			node.parentNode.addClassName('form_input_error');
			node.parentNode.next().insert({after: $('input_error')});
		}else {
			node.insert({after: $('input_error')});
		}
		$('input_error').style.display = 'block';
		$('input_error').innerHTML = msg;
		node.scrollTo();
	},
	//新版修改视频信息接口
	modifyVideo: function (){
		var video = document.forms['video'];
		var form_data = $(video).serialize(true);
		var download_disabled = $('download_disabled');
		var declare_copyright = $('declare_copyright');
		var topic_info = ''; //新加话题
		if(download_disabled){
			if(form_data.download_disabled != 1)form_data.download_disabled = 0;
			if(download_disabled.disabled){
				delete form_data.download_disabled;
			}
		}

		/*新加授权判断*/
		if(declare_copyright){
			if(form_data.declare_copyright != 1 && form_data.declare_copyright != 2)form_data.declare_copyright = 0;
			if(declare_copyright.disabled){
				delete form_data.declare_copyright;
			}
		}
		
		/*新加话题*/
		var topic_num = 0;
		jQuery('#issetvideotopic li').each(function(){
			topic_num += 1;
			if(topic_info == '')
			{
				topic_info += '#'+jQuery(this).attr('_data_tag')+'#';
			}else{
				topic_info += ',#' + jQuery(this).attr('_data_tag')+'#';
			}
		});
		if(topic_num > 1)
		{
			return mg.showVideoError('topic_info_error','话题最多为1个!');
		}
		form_data.topic_info = topic_info;
		
		if (mg.shotDetail) {
			form_data.shot_detail_p = mg.shotDetail.p;
			form_data.shot_detail_ts = mg.shotDetail.ts;
			form_data.shot_detail_s = mg.shotDetail.s
			form_data.shot_detail_f = mg.shotDetail.f;
		}
		if (!trim($F(video['title']))) {
			return mg.showVideoError('title', '请填写标题');
		}
		// if (video['privacy'].value == 'password') {
		// 	if (!trim($F(video['password']))) {
		// 		return mg.showVideoError('password', '请填写密码');
		// 	}
		// 	if (!$F(video['password']).match(/^[a-z0-9]+$/i)) {
		// 		return mg.showVideoError('password', '密码只能使用数字、字母!');
		// 	}
		// }
		if (!trim($F(video['verifyCode']))) {
			return mg.showVideoError('verifyCode', '请填写验证码');
		}
		var _logo = $('logo_e').down('img').readAttribute('_logo');
		if (_logo) {
			if (_logo.length == 66) {
				//自定义截图
				form_data.thumbnail_id = _logo;
			}
			else if(_logo.match(/^((http)?:\/\/)[^\s]+/i)) {
				form_data.thumbnail_custom = _logo;
			}
			else {
				//8选一截图
				form_data.thumbnail_num = _logo;
			}
		}
		
		nova_request(function(res){
			if (res == "ok") {
				mg.edit_submit('ok');
			} else {
				var error = mg.getVideoError(res);

				if (error) {
					mg.showVideoError(error.field, error.msg);
				} else {
					switch (res) {
						case  -205:
							//$('showdvderror').show();
							break;
						case  -1:
							mg.showVideoError("verifyCode", "保存失败");
							break;
						default:
							//mg.showVideoError("verifyCode", "未登录");
							break;
					}
				}
			}

		}, "/u/videos/update", form_data, 'post');
	},
	_changeheight:function(){
		function findDimensions(){ //函数：获取尺寸
			//获取窗口宽度
			if (window.innerWidth)
				winWidth = window.innerWidth;
			else if ((document.body) && (document.body.clientWidth))
				winWidth = document.body.clientWidth;

			//获取窗口高度
			if (window.innerHeight)
				winHeight = window.innerHeight;
			else if ((document.body) && (document.body.clientHeight))
				winHeight = document.body.clientHeight;

			//通过深入Document内部对body进行检测，获取窗口大小
			if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth){
				winHeight = document.documentElement.clientHeight;
				winWidth = document.documentElement.clientWidth;
			}
			//结果输出至两个文本框
			return {'width':winWidth,'height':winHeight};
		}

		//$$(".YK_body")[0].style.minHeight = '300px';
		$$(".YK_main")[0].style.minHeight = '300px';

		var size = findDimensions(),m_conE = $$(".manager_con")[0],m_con_bdE = $$(".manager_con")[0].down('.bd');
		//alert(size.height);
		//alert(m_conE.getHeight());
		if(size.height - 210 < m_conE.getHeight()){
			if(size.height - 210 > 184){
				m_conE.style.height = (size.height - 210) + 'px';
				m_con_bdE.style.height = (size.height - 234) + 'px';
			}else{
				m_conE.style.height = '184px';
				m_con_bdE.style.height = '160px';
			}
		}
		//alert(m_conE.getHeight());
	},
	showdetail:function(event){
		this.source = Element.extend(Event.element(event));
		if(!this.qwindow)this.qwindow = this._createwin();
		this.qwindow
			.setSize(520,230)
			.setContent("html", document.getElementById("cont7").innerHTML)
			.showHandle()
			.hide();
		var winbody = $(this.qwindow.dom.winbody),detailid = this.source.getAttribute('_detailid'),shenshu = this.source.getAttribute('_shenshu'),title = this.source.up('div').down('.band_detailtitle').innerHTML;
		winbody.down('.tips_title').innerHTML = title.replace(/^已屏蔽，/ig, "屏蔽原因：");
		winbody.down('.tips_content').innerHTML = $("cont7_"+detailid).innerHTML;
		if(shenshu != 0){
			winbody.down('.tips_action').innerHTML = '<a target="_blank" href="'+shenshu+'"  _hz="feed"><div class="form_btn form_btn_s form_btnmaj_s" onclick="qwindow.hide()"><span class="form_btn_text">申　诉</span></div></a>	<div class="form_btn form_btn_s form_btnsub_s" onclick="qwindow.hide()"><span class="form_btn_text">知道了</span></div>';
		}else{
			winbody.down('.tips_action').innerHTML = '<div class="form_btn form_btn_s form_btnmaj_s" onclick="qwindow.hide()"><span class="form_btn_text">知道了</span></div>';
		}

		var manager_tips_height = winbody.down('.manager_tips').getHeight();
		this.qwindow.setSize(520,manager_tips_height).show();

	},
	setbrand: function(){
		var brandType = $('brandtype_1').checked == true ? 1 : 0;
		nova_request(function(res) {
			if(res == 1){
				$('save_msg_success').show();
				$('save_msg_fail').hide();
			}else{
				$('save_msg_success').hide();
				$('save_msg_fail').show();
			}
			setTimeout(function(){
				$('save_msg_success').hide();
				$('save_msg_fail').hide();
			}.bind(this), 5000);
		}.bind(this), '/u/videos/brand', {'act':'save','type':brandType}, 'post');
	},
	closeBiankanbianmaiTips: function(){
		Nova.Cookie.set('bkbmtips', 1, 365, '/u/', window.location.host);
		$('biankanbianmaiTips').style.display = 'none';
	},
	videosGuide: function(){
		var Guide = function(contents,sizes,posrefer){
			var gWindow = new Qwindow({
				'showmask': true,
				'showhandle':false,
				maskstyle: { color: '#545454', opacity: 0.5 },
				posrefer:posrefer,// $$('.yk-annotation')[0],
				onshow:function(){
				}
			});

			window.onresize = function(){
				var w = posrefer.offsetWidth;
				gWindow.setSize(w);
			}
			//改写样式
			var wEles = gWindow.getElements();
			$(wEles.winhead).remove();
			$(wEles.winbg).remove();
			wEles.winbody.style.background = 'none';
			wEles.winbox.style.border = 'none';

			gWindow.trigger = function(inx){
				var size = sizes[inx];
				var con = contents[inx];
				gWindow.setSize(size.width,size.height).setContent("element",con).show();
			}
			return  gWindow;
		}
		var contents = $$('.interact-guide');
		var revenueEle = $$('.step-revenue')[0];
		var manageEle = $$('.step-manage')[0];
		if(null != revenueEle){//创收设置页
			if(Nova.Cookie.get('va_p_g') == 1)return;
			var w = $$('.yk-con')[0].offsetWidth;//793
			var guide = Guide(contents,[{width:w,height:451}],$$('.yk-con')[0]);
			var currentLi = $$('.YK_subtab li');
			if(currentLi.length == 4){
				guide.setPos(92,-30);
			}else{
				guide.setPos(92,-150);
			}
			$($$('.step-revenue .next')[0]).observe('click',function(){
				guide.hide();
				Nova.Cookie.set('va_p_g',1, 365, '/', window.location.host);
			});
			guide.trigger(0);
			Nova.Cookie.set('va_p_g',1, 365, '/', window.location.host);
		}

		if(null != manageEle){//视频管理页
			return;//下线
			if(Nova.Cookie.get('vl_a_g_v2') == 1)return;
			var w = $$('.yk-con')[0].offsetWidth;//608
			var guide = Guide(contents,[{width:w,height:235}],$$('.yk-con')[0]);
			guide.setPos(20,0);
			$($$('.step-manage .next')[0]).observe('click',function(){
				guide.hide();
				Nova.Cookie.set('vl_a_g_v2',1, 365, '/', window.location.host);
			});
			guide.trigger(0);
			Nova.Cookie.set('vl_a_g_v2',1, 365, '/', window.location.host);
		}
	}

};
var actnote_mg = {
	source: null,
	init:function(){
		var annotate_mg = $$('[_uc="annotate_mg"]')[0];
		if(!annotate_mg) return;
		Event.observe(annotate_mg, 'click', this.handler_event.bind(this));
		this.notesLength = 3;
		this.noteCurrent = null;
		this.isvaluechange = 0;
		this.isvalueedit = 0;
		this.is_open = 1;
		this.tradLength = 10;
		this.cateLoaded = 0;
		this.rateLoaded = 0;
		this.timestamp = 0;
		var notesList = $('timeline').select('[_nt="data"]');
		if(notesList.length >= this.notesLength){
			$('noteadd').style.display = 'none';
		}else{
			$('noteadd').style.display = 'block';
		}

		window.onbeforeunload = function(e){
			if(this.escapeIEAclick == 1){
				return;
			}
			if(this.isvalueedit == 1){

				if(Prototype.Browser.IE){
					return "您有一条编辑中的注释尚未保存，是否丢弃？";
				}else{
					e.returnValue="您有一条编辑中的注释尚未保存，是否丢弃？";
					return "您有一条编辑中的注释尚未保存，是否丢弃？";
				}
			}
			if(this.isvaluechange == 1){
				if(Prototype.Browser.IE){
					return "当前内容尚未保存，是否放弃？";
				}else{
					e.returnValue="当前内容尚未保存，是否放弃？";
					return "当前内容尚未保存，是否放弃？";
				}
			}
		}.bind(this);
		if ( $('bgImgPH') ) {
			// this.bindswf();
			this.loadswfu();
		}
		mg.videosGuide();
		this.editTradGuide();
	},
	handler_event: function(event) {
		var cmd;
		this.source = Element.extend(Event.element(event));
		if((cmd = this.source.getAttribute('_click'))) {
			try {mg[cmd](event);Event.stop(event);} catch(e) {alert(e)};
		}else{
			this.source = this.source.up('[_click]',0);
			if(this.source && (cmd = this.source.getAttribute('_click'))) {
				try {mg[cmd](event);Event.stop(event);} catch(e) {alert(e)};
			}
		}
	},
	annotate_add: function(type){
		if(!this.annotate_isvalueedit())return false;
		this.isvalueedit = 1;
		this.is_open = 1;
		this.actType = 1;
		this.noteCurrent = null;
		this.noteCurrent_sort = null;
		this.noteCurrentData = null;
		this.tradCurrentData = null;
		type = type||1;
		var perTimeLength = 30
			,noteadd = $('noteadd')
			,noteedit = $('noteedit');
		noteadd.insert({before: noteedit});

		var lastE,notesList = $('timeline').select('[_nt="data"]');
		if(notesList.length>0)lastE = notesList[notesList.length-1];

		if(lastE == undefined){
			$('in_start').value =  this.noteCurrent_in_start =  mg.time_format(0);
			if(NoteSeconds >= perTimeLength){
				$('in_end').value =  this.noteCurrent_in_end =  mg.time_format(perTimeLength);
			}else{
				$('in_end').value =  this.noteCurrent_in_end =  mg.time_format(NoteSeconds);
			}
			noteedit.down('.timepoint').innerHTML = this.noteCurrent_in_start;
		}else{
			var data = lastE.readAttribute('data');
			data = (decodeURIComponent(data)).evalJSON(1);
			if(NoteSeconds <= data.end+1){
				$('in_start').value =  this.noteCurrent_in_start = mg.time_format(NoteSeconds);
			}else{
				$('in_start').value =  this.noteCurrent_in_start = mg.time_format(data.end+1);
			}
			if(NoteSeconds <= data.end+perTimeLength+1){
				$('in_end').value =  this.noteCurrent_in_end =  mg.time_format(NoteSeconds);
			}else{
				$('in_end').value =  this.noteCurrent_in_end =  mg.time_format(data.end+perTimeLength+1);
			}
			noteedit.down('.timepoint').innerHTML = this.noteCurrent_in_start;
		}
		$('input_error').style.display = 'none';
		//示意图初始化
		$('noteedit_showtext_init').style.display = 'none';
		$('noteedit_showtext').style.display = 'none';
		$('noteedit_showpic').style.display = 'none';
		$('noteedit_showpicfull').style.display = 'none';
		$('noteedit_reward').style.display = 'none';
		$('noteedit_showgift').style.display = 'none';
		$('noteedit_showrim').style.display = 'none';
		$('noteedit_showsale').style.display = 'none';

		//输入框初始化
		$('noteedit_text').style.display = 'none';
		$('noteedit_href').style.display = 'none';
		$('noteedit_pos').style.display = 'none';
		$('noteedit_price').style.display = 'none';
		$('noteedit_gift').style.display = 'none';
		$('noteedit_rim_id').style.display = 'none';
		$('noteedit_rim_href').style.display = 'none';
		$('noteedit_msg').style.display = 'none';
		$('noteedit_msgcontent').style.display = 'none';
		$('noteedit_temp').style.display = 'none';
		$('noteedit_video_url').style.display = 'none';
		$('noteedit_saleadd').style.display = 'none';
		$('noteedit_saleedit').style.display = 'none';

		noteedit.removeClassName('ep_buy_inf');
		//根据类型处理
		switch(type){
			case 1:
				this.noteCurrentType = 1;
				$('noteedit_mapbox').down('h3').innerHTML = '文字注释示意图';
				$('noteedit_showtext_init').style.display = 'block';
				$('noteedit_showtext').style.display = 'block';

				$('noteedit_text').style.display = 'block';
				$('noteedit_href').style.display = 'block';
				$('noteedit_pos').style.display = 'block';
				noteedit.down('h3').innerHTML = '添加文字注释';
				$('in_text').value = '';
				$('in_href').value = '';
				$('in_pos_left').checked = true;
				break;
			case 2:
				this.noteCurrentType = 2;
				$('noteedit_mapbox').down('h3').innerHTML = '频道推广示意图';
				$('noteedit_showtext_init').style.display = 'block';
				$('noteedit_text').style.display = 'block';
				$('noteedit_showpic').style.display = 'block';
				$('noteedit_temp').style.display = 'block';

				$('in_text').value = '想看更多更新，来订阅我吧~';
				$('in_text').addClassName('form_input_defaultvalue');
				$('in_text').onfocus = function(){
					$('in_text').removeClassName('form_input_defaultvalue');
				}
				for ( var i = 1 ; i <= 3 ; i++){
					var eleUrl = 'videourl' + i;
					$(eleUrl).value = '';
				}

				noteedit.down('h3').innerHTML = '添加频道推广';
				this.channelExtSwitchPreView(1);
				break;
			//case 3:
			//      this.noteCurrentType = 3;
			//      $('noteedit_mapbox').down('h3').innerHTML = '打赏互动示意图';
			//	$('noteedit_showtext_init').style.display = 'block';
			//	$('noteedit_reward').style.display = 'block';
			//
			//      $('noteedit_text').style.display = 'block';
			//	$('noteedit_price').style.display = 'block';
			//	$('noteedit_msg').style.display = 'block';
			//	$('in_ismsg_yes').checked = true;
			//	$('noteedit_msgcontent').style.display = 'block';
			//	$('in_msgcontent').value = $('msgInitContent').innerHTML;
			//	noteedit.down('h3').innerHTML = '添加打赏互动';
			//      $('in_text').value = '视频创作不容易，打个赏支持下吧';
			//	$('in_text').addClassName('form_input_defaultvalue');
			//      $('in_price1').value = '';
			//	$('in_price2').value = '';
			//	$('in_price3').value = '';
			//	$('in_price2').disabled = true;
			//	$('in_price3').disabled = true;
			//	$('price1_mapbox').innerHTML = '1优豆';
			//	$('price2_mapbox').innerHTML = '10优豆';
			//	$('price3_mapbox').innerHTML = '100优豆';
			//	$('price1_mapbox').style.display = 'block';
			//	$('price2_mapbox').style.display = 'block';
			//	$('price3_mapbox').style.display = 'block';
			//	$('in_text').onfocus = function(){
			//		$('in_text').removeClassName('form_input_defaultvalue');
			//	}
			//      break;
			//case 4:
			//      this.noteCurrentType = 4;
			//      $('noteedit_mapbox').down('h3').innerHTML = '送礼互动示意图';
			//	$('noteedit_showtext_init').style.display = 'block';
			//	$('noteedit_showgift').style.display = 'block';
			//
			//      $('noteedit_text').style.display = 'block';
			//	$('noteedit_gift').style.display = 'block';
			//	$('noteedit_msg').style.display = 'block';
			//	$('in_ismsg_yes').checked = true;
			//	$('noteedit_msgcontent').style.display = 'block';
			//	$('in_msgcontent').value = $('msgInitContent').innerHTML;
			//	noteedit.down('h3').innerHTML = '添加送礼互动';
			//      $('in_text').value = '视频很精彩，送个礼物支持下';
			//	$('in_text').addClassName('form_input_defaultvalue');
			//      $('in_gift_1').checked = false;
			//	$('in_gift_2').checked = false;
			//	$('in_gift_3').checked = false;
			//	$('in_gift_4').checked = false;
			//	$('in_gift_5').checked = false;
			//	$('in_gift_6').checked = false;
			//	$('in_gift_1').disabled = false;
			//	$('in_gift_2').disabled = false;
			//	$('in_gift_3').disabled = false;
			//	$('in_gift_4').disabled = false;
			//	$('in_gift_5').disabled = false;
			//	$('in_gift_6').disabled = false;
			//	$('noteedit_showgift_text').innerHTML = '<span class="fans_num_right">已收到XX人气</span>';
			//	$('in_text').onfocus = function(){
			//		$('in_text').removeClassName('form_input_defaultvalue');
			//	}
			//      break;
			case 5:
				this.noteCurrentType = 5;
				$('noteedit_mapbox').down('h3').innerHTML = '佣金推广示意图';
				$('noteedit_showtext_init').style.display = 'block';
				$('noteedit_showrim').style.display = 'block';

				$('noteedit_text').style.display = 'block';
				$('noteedit_rim_id').style.display = 'block';
				$('noteedit_rim_href').style.display = 'block';
				noteedit.down('h3').innerHTML = '添加佣金推广';
				$('in_text').value = '';
				$('in_rim_id').value = '';
				break;
			case 6:
				noteedit.addClassName('ep_buy_inf');
				this.noteCurrentType = 6;
				$('noteedit_mapbox').down('h3').innerHTML = '边看边买示意图';
				$('noteedit_showtext_init').style.display = 'block';
				$('noteedit_showsale').style.display = 'block';

				$('noteedit_saleadd').style.display = 'block';
				noteedit.down('h3').innerHTML = '添加边看边买';
				$('noteedit_saleedit_title').value = '';
				$('noteedit_saleedit_summary').value = '';
				//$('add_trad_pic').href = $('add_trad_pic').readAttribute('_href');
				$('add_trad_pic').writeAttribute('href',$('add_trad_pic').readAttribute('_href'));
				$('noteedit_saleedit_detail').innerHTML = '';

				$('input_error').style.display = 'none';
				$('noteedit').select('.form_input_error').each(function(o){
					o.removeClassName('form_input_error');
				}.bind(this));

				break;
			default:
				alert('参数错误!');
				return;
				break;
		}

		if(notesList.length >= this.notesLength-1){
			$('noteadd').style.display = 'none';
		}else{
			$('noteadd').style.display = 'block';
		}
		noteedit.style.display = 'block';
	},
	//annotate_select_gift: function(){
	//	var gifts = $('noteedit_gift').select('input')
	//	,selectNum = 0
	//	,giftShow = ''
	//	,noteedit_showgift_text = $('noteedit_showgift_text');;
	//	var getShowText = function(type){
	//		var re = '';
	//		switch(type){
	//			case 1:
	//				re = '红玫瑰';
	//				break;
	//			case 2:
	//				re = '蓝色妖姬';
	//				break;
	//			case 3:
	//				re = '浪漫花束';
	//				break;
	//			case 4:
	//				re = '节操碎片 ';
	//				break;
	//			case 5:
	//				re = '节操胶带';
	//				break;
	//			case 6:
	//				re = '节操精华';
	//				break;
	//			default:
	//				re = '红玫瑰';
	//				break;
	//		}
	//		return re;
	//	};
	//	gifts.each(function(o){
	//		if(o.checked){
	//			selectNum++;
	//			giftShow += '<span class="fans_num">' + getShowText(parseInt(o.value,10)) + '</span>';
	//		}
	//	}.bind(this));
	//	giftShow = '<span class="fans_num_right">已收到XX人气</span>' + giftShow;
	//	noteedit_showgift_text.innerHTML = giftShow;
	//	if(selectNum >= 3){
	//		gifts.each(function(o){
	//			if(!o.checked){
	//				o.disabled = true;
	//			}
	//		}.bind(this));
	//	}else{
	//		gifts.each(function(o){
	//			if(!o.checked){
	//				o.disabled = false;
	//			}
	//		}.bind(this));
	//	}
	//},
	annotate_priceinput: function(sort,value){
		switch(sort){
			case 1:
				if(value>0){
					$('price1_mapbox').innerHTML = value +'优豆';
					$('in_price2').disabled = false;
				}else{
					$('price1_mapbox').innerHTML ='1优豆';
				}
				break;
			case 2:
				if(value>0){
					$('price2_mapbox').innerHTML = value +'优豆';
					$('in_price3').disabled = false;
				}else{
					$('price2_mapbox').innerHTML ='10优豆';
				}
				break;
			case 3:
				if(value>0){
					$('price3_mapbox').innerHTML = value +'优豆';
				}else{
					$('price3_mapbox').innerHTML ='100优豆';
				}
				break;
			default:
				break;
		}
		var ep1 = $('in_price1'),ep2 = $('in_price2'),ep3 = $('in_price3'),nullNum = 0;

		if(ep1.value > 0){
			$('price1_mapbox').innerHTML = ep1.value +'优豆';
			$('price1_mapbox').style.display = 'block';
		}else{
			$('price1_mapbox').innerHTML ='1优豆';
			$('price1_mapbox').style.display = 'none';
			nullNum++;
		}
		if(ep2.value > 0){
			$('price2_mapbox').innerHTML = ep2.value +'优豆';
			$('price2_mapbox').style.display = 'block';
		}else{
			$('price2_mapbox').innerHTML ='10优豆';
			$('price2_mapbox').style.display = 'none';
			nullNum++;
		}
		if(ep3.value > 0){
			$('price3_mapbox').innerHTML = ep3.value +'优豆';
			$('price3_mapbox').style.display = 'block';
		}else{
			$('price3_mapbox').innerHTML ='100优豆';
			$('price3_mapbox').style.display = 'none';
			nullNum++;
		}
		if(nullNum == 3){
			$('price1_mapbox').style.display = 'block';
			$('price2_mapbox').style.display = 'block';
			$('price3_mapbox').style.display = 'block';
		}

	},
	annotate_delete: function(o){
		if(!this.annotate_isvalueedit())return false;
		if(!this.qwindow)this.qwindow = this._createwin();
		this.qwindow
			.setSize(240,105)
			.setContent("html", document.getElementById("cont1").innerHTML)
			.showHandle()
			.show();
		this.qwindow.showMask();
		this.qwindow.setSize(240,105);
		$(this.qwindow.dom.winbody).down('.tips_title').innerHTML = '<span class="ico__fail"><em>提示</em></span>您确定要删除此注释么？';
		this.noteCurrent = $(o).up('[_nt="data"]');
	},
	annotate_isvalueedit: function(){
		//display save status
		/*
		 $('success_top').style.display = 'none';
		 $('success_bottom').style.display = 'none';
		 $('lost_top').style.display = 'none';
		 $('lost_bottom').style.display = 'none';
		 */
		if(this.isvalueedit == 1){
			if(!this.qwindow)this.qwindow = this._createwin();
			this.qwindow
				.setSize(240,120)
				.setContent("html", document.getElementById("cont2").innerHTML)
				.showHandle()
				.show();
			this.qwindow.showMask();
			this.qwindow.setSize(240,120);
			$(this.qwindow.dom.winbody).down('.tips_title').innerHTML = '<span class="ico__fail"><em>提示</em></span>您有一条编辑中的注释尚未保存，是否丢弃？';
			return false;
		}else{
			return true;
		}
	},
	_createwin: function(){
		qwindow = new Qwindow({
			//'zindex': 2000,
			'elements': 'select',
			'showmask': true
		});
		return qwindow;
	},
	annotate_ctime: function(t){
		var timeReg = /^[0-9]{2}:[0-5][0-9]:[0-5][0-9]$/i;
		if (t.match(timeReg)) {
			return true;
		} else {
			return false;
		}
	},
	annotate_ctime_back: function(type){
		var noteedit = $('noteedit'),in_start = $('in_start'),in_end = $('in_end');

		if(type == 'start'){
			in_start.value = autoFormate(in_start.value);
			if(!this.noteCurrent_in_start){
				this.noteCurrent_in_start = mg.time_format(0);
			}
			if (!this.annotate_ctime(in_start.value)) {
				in_start.value = this.noteCurrent_in_start;
			}else{
				noteedit.down('.timepoint').innerHTML = in_start.value;
			}
		}else if(type == 'end'){
			in_end.value = autoFormate(in_end.value);
			if(!this.noteCurrent_in_end){
				this.noteCurrent_in_end = mg.time_format(5);
			}
			if (!this.annotate_ctime(in_end.value)) {
				in_end.value = this.noteCurrent_in_end;
			}else{

			}
		}

		function autoFormate(v){
			if (v.match(/^[0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2}$/i)) {
				var arrValue = v.split(/:/i);
				arrValue[0] = parseInt(arrValue[0],10);
				arrValue[1] = parseInt(arrValue[1],10);
				arrValue[2] = parseInt(arrValue[2],10);
				if(arrValue[0]<10)arrValue[0] = '0'+ arrValue[0];
				if(arrValue[1]<10)arrValue[1] = '0'+ arrValue[1];
				if(arrValue[2]<10)arrValue[2] = '0'+ arrValue[2];
				v = arrValue[0] + ':' + arrValue[1] + ':' + arrValue[2];
			}
			return v;
		}
	},
	annotate_arrowinput: function(el,e){
		var e = e || window.event;
		var code = e.charCode||e.keyCode;
		var t;
		if(code >= 37 && code <= 40){
			if(code == 38 || code == 39){
				t = this.re_time_format(el.value);
				t = (t+1)> NoteSeconds ? NoteSeconds : t+1;
				el.value = mg.time_format(t);
			}else{
				t = this.re_time_format(el.value);
				t = (t-1)< 0 ? 0 : t-1;
				el.value = mg.time_format(t);
			}
		}
	},
	annotate_addOk: function(){
		if(this.is_annotate_addOk == 1){
			return;
		}else{
			this.is_annotate_addOk = 1;
			setTimeout(function(){
				this.is_annotate_addOk = 0;
			}.bind(this),1000)
		}
		if(!this.noteCurrentType){
			alert('加载错误，请刷新后重试！');
		}
		if(this.is_open != 1){
			mg._alertNote({"eleid":"in_text","errpos":$("in_text").up(),"eclick":"in_text","efocus":"in_text","msg":"服务器无响应，请取消重试"});return;
		}
		//时间格式检查
		var in_start = $('in_start').value;
		if (!this.annotate_ctime(in_start)) {
			mg._alertNote({"eleid":"in_start","errpos":$("in_start").up(),"eclick":"in_start","efocus":"in_start","msg":"格式错误"});
			return;
		}
		var in_end = $('in_end').value;
		if (!this.annotate_ctime(in_end)) {
			mg._alertNote({"eleid":"in_end","errpos":$("in_end").up(),"eclick":"in_end","efocus":"in_end","msg":"格式错误"});
			return;
		}

		var fstart = this.re_time_format(in_start);
		var fend = this.re_time_format(in_end);

		if(fstart < 0){
			mg._alertNote({"eleid":"in_start","errpos":$("in_start").up(0),"eclick":"in_start","efocus":"in_start","msg":"开始时间需不小于0秒，请修改"});return;
		}
		if(fend <=0){
			mg._alertNote({"eleid":"in_end","errpos":$("in_end").up(0),"eclick":"in_end","efocus":"in_end","msg":"结束时间需大于0秒，请修改"});return;
		}
		if(fstart >= NoteSeconds){
			mg._alertNote({"eleid":"in_start","errpos":$("in_start").up(0),"eclick":"in_start","efocus":"in_start","msg":"开始时间需小于视频时长，请修改"});return;
		}
		if(fend > NoteSeconds){
			mg._alertNote({"eleid":"in_end","errpos":$("in_end").up(0),"eclick":"in_end","efocus":"in_end","msg":"结束时间需不大于视频时长，请修改"});return;
		}
		if(fstart >= fend){
			mg._alertNote({"eleid":"in_end","errpos":$("in_end").up(0),"eclick":"in_end","efocus":"in_end","msg":"结束时间需大于开始时间，请修改"});return;
		}

		//时间范围检查
		var notesList = $('timeline').select('[_nt="data"]'),tempData,insertPost,tempNum;

		for(var i=0;i<notesList.length;i++){
			//if(this.noteCurrentElePos === i)continue;
			tempData = notesList[i].readAttribute('data');
			tempData = (decodeURIComponent(tempData)).evalJSON(1);

			if(fstart < tempData.start && fend > tempData.end){
				if(this.noteCurrent_sort && this.noteCurrent_sort <= i+1)
					tempNum = i+2;
				else
					tempNum = i+1;
				mg._alertNote({"eleid":"in_start","errpos":$("in_start").up(0),"eclick":"in_start","efocus":"in_start","msg":"与第"+tempNum+"条注释的时间冲突"});
				mg._alertNote({"eleid":"in_end","errpos":$("in_end").up(0),"eclick":"in_end","efocus":"in_end","msg":"与第"+tempNum+"条注释的时间冲突，请修改"});return;
			}
			if(fstart >= tempData.start && fstart < tempData.end){
				if(this.noteCurrent_sort && this.noteCurrent_sort <= i+1)
					tempNum = i+2;
				else
					tempNum = i+1;
				mg._alertNote({"eleid":"in_start","errpos":$("in_start").up(0),"eclick":"in_start","efocus":"in_start","msg":"与第"+tempNum+"条注释的时间冲突，请修改"});return;
			}
			if(fend > tempData.start && fend <= tempData.end){
				if(this.noteCurrent_sort && this.noteCurrent_sort <= i+1)
					tempNum = i+2;
				else
					tempNum = i+1;
				mg._alertNote({"eleid":"in_end","errpos":$("in_end").up(0),"eclick":"in_end","efocus":"in_end","msg":"与第"+tempNum+"条注释的时间冲突，请修改"});return;
			}
			if(fend <= tempData.start){
				insertPost = notesList[i];
				break;
			}

		}

		if(!insertPost){
			insertPost = $("noteadd");
		}
		switch(this.noteCurrentType){
			case 1:
				//文字解释
				var text,in_text = $('in_text');
				text = trim(in_text.value.replace(/<[^>]*?>/ig, ""));
				in_text.value = text;

				if(text.length == 0){
					mg._alertNote({"eleid":"in_text","errpos":$("in_text").up(),"eclick":"in_text","efocus":"in_text","msg":"文字内容不能为空，请输入内容"});return;
				}
				if(text.length > 20){
					mg._alertNote({"eleid":"in_text","errpos":$("in_text").up(),"eclick":"in_text","efocus":"in_text","msg":"文字内容超过20个字，请修改"});return;
				}

				//链接解释
				var in_href = trim($('in_href').value);
				if(in_href.length > 0){
					var pos = in_href.search(/[^.]+\.com/);
					if(pos!=-1){
						var arr = in_href.match(/([^.]+)\.com/);
						if(arr[1]!='youku' &&  arr[1]!='soku' &&  arr[1]!='tudou'){
							mg._alertNote({"eleid":"in_href","errpos":$("in_href").up(),"eclick":"in_href","efocus":"in_href","msg":"仅支持优酷、土豆网、搜库链接，请修改"});
							return;
						}
					}
					if(!in_href.match(/^http:\/\/[a-zA-Z0-9\.-]+\.([a-zA-Z]{2,4})(:\\d+)?(\/[a-zA-Z0-9-_@#%&\?\.=\/]*)?$/)){
						mg._alertNote({"eleid":"in_href","errpos":$("in_href").up(),"eclick":"in_href","efocus":"in_href","msg":"仅支持优酷、土豆网、搜库链接，请修改"});return;
					}

					if (! (in_href.match(/http:\/\/[^.]+\.((youku)|(soku)|(tudou))\.com\/?.*$/i) || in_href.match(/http:\/\/[^.]+?\.((youku)|(soku)|(tudou))\.com\/[^.]+(\.html|\.htm|\.php)/i))) {
						mg._alertNote({"eleid":"in_href","errpos":$("in_href").up(),"eclick":"in_href","efocus":"in_href","msg":"仅支持优酷、土豆网、搜库链接，请修改"});return;
					}

				}
				if(in_href.length > 255){
					mg._alertNote({"eleid":"in_href","errpos":$("in_href").up(),"eclick":"in_href","efocus":"in_href","msg":"最多255个字"});return;
				}
				break;
			case 2:
				//空间推广

				// 保证来自优酷的视频.全屏的时候才要校验
				var temp_radios = $('noteedit_temp').select("input");
				var temp_type = temp_radios.select(function(node){
					return node.checked;
				});
				temp_type = temp_type[0].value;
				if ( temp_type == 3 ) {
					// 第一个不能为空
					if ( trim($("videourl1").value) == "" ) {
						mg._alertNote({"eleid":"videourl1","errpos":$("videourl1").up(),"eclick":"videourl1","efocus":"videourl1","msg":"视频链接1不能为空。"});
						return;
					}
					var ykVstr = 'http://v.youku.com/v_show/id_';
					for ( var i = 0; i < 3 ; i ++ ) {
						var vurlid = "videourl"+ (i + 1);
						var vurl = trim($(vurlid).value);
						if ( vurl != "" && vurl.indexOf(ykVstr) === -1  ) {
							mg._alertNote({"eleid":vurlid,"errpos":$(vurlid).up(),"eclick":vurlid,"efocus":vurlid,"msg":"仅支持优酷视频地址，请修改。"});
							return;
						}
					}
				}

				var text,in_text = $('in_text');
				text = trim(in_text.value.replace(/<[^>]*?>/ig, ""));
				in_text.value = text;

				if(text.length == 0){
					mg._alertNote({"eleid":"in_text","errpos":$("in_text").up(),"eclick":"in_text","efocus":"in_text","msg":"文字内容不能为空，请输入内容"});return;
				}
				if(text.length > 15){
					mg._alertNote({"eleid":"in_text","errpos":$("in_text").up(),"eclick":"in_text","efocus":"in_text","msg":"文字内容超过15个字，请修改"});return;
				}
				break;
			//case 3:
			//	//打赏
			//	var text,in_text = $('in_text'),isPriceHasData = false,in_ismsg = 0,in_msgcontent = '';
			//	text = trim(in_text.value.replace(/<[^>]*?>/ig, ""));
			//	in_text.value = text;
			//
			//	if(text.length == 0){
			//		mg._alertNote({"eleid":"in_text","errpos":$("in_text").up(),"eclick":"in_text","efocus":"in_text","msg":"文字内容不能为空，请输入内容"});return;
			//	}
			//	if(text.length > 20){
			//		mg._alertNote({"eleid":"in_text","errpos":$("in_text").up(),"eclick":"in_text","efocus":"in_text","msg":"文字内容超过20个字，请修改"});return;
			//	}
			//	$('in_price1').value = $('in_price1').value.replace(/(^\s*)|(\s*$)/ig, "");
			//	$('in_price2').value = $('in_price2').value.replace(/(^\s*)|(\s*$)/ig, "");
			//	$('in_price3').value = $('in_price3').value.replace(/(^\s*)|(\s*$)/ig, "");
			//	if($('in_price1').value != ''){
			//		if ( !$('in_price1').value.match(/^[1-9][\d]{0,3}$/i)) {
			//			mg._alertNote({"eleid":"in_price1","errpos":$("in_price1").up(),"eclick":"in_price1","efocus":"in_price1","msg":"打赏金额支持1万以内的整数"});return;
			//		}
			//		isPriceHasData = true;
			//	}
			//	if($('in_price2').value != ''){
			//		if ( !$('in_price2').value.match(/^[1-9][\d]{0,3}$/i)) {
			//			mg._alertNote({"eleid":"in_price2","errpos":$("in_price2").up(),"eclick":"in_price2","efocus":"in_price2","msg":"打赏金额支持1万以内的整数"});return;
			//		}
			//		isPriceHasData = true;
			//	}
			//	if($('in_price3').value != ''){
			//		if ( !$('in_price3').value.match(/^[1-9][\d]{0,3}$/i)) {
			//			mg._alertNote({"eleid":"in_price3","errpos":$("in_price3").up(),"eclick":"in_price3","efocus":"in_price3","msg":"打赏金额支持1万以内的整数"});return;
			//		}
			//		isPriceHasData = true;
			//	}
			//	if(!isPriceHasData){
			//		mg._alertNote({"eleid":"in_price1","errpos":$("in_price1").up(),"eclick":"in_price1","efocus":"in_price1","msg":"打赏金额不能为空，请输入"});return;
			//	}
			//
			//	if($('in_ismsg_yes').checked == true){
			//		in_ismsg = 1;
			//		in_msgcontent = trim($('in_msgcontent').value);
			//		if(in_msgcontent  ==  ''){
			//			mg._alertNote({"eleid":"in_msgcontent","errpos":$("in_msgcontent").up(),"eclick":"in_msgcontent","efocus":"in_msgcontent","msg":"私信内容不能为空，请修改"});return;
			//		}
			//		if(in_msgcontent.length  >  200){
			//			mg._alertNote({"eleid":"in_msgcontent","errpos":$("in_msgcontent").up(),"eclick":"in_msgcontent","efocus":"in_msgcontent","msg":"私信内容超过200个字，请修改"});return;
			//		}
			//	}
			//
			//	break;
			//case 4:
			//	//送礼
			//	var text,in_text = $('in_text'), noteedit_gift = $('noteedit_gift').select('input'),noteedit_gift_string = '',in_ismsg = 0,in_msgcontent = '';
			//	text = trim(in_text.value.replace(/<[^>]*?>/ig, ""));
			//	in_text.value = text;
			//
			//	if(text.length == 0){
			//		mg._alertNote({"eleid":"in_text","errpos":$("in_text").up(),"eclick":"in_text","efocus":"in_text","msg":"文字内容不能为空，请输入内容"});return;
			//	}
			//	if(text.length > 20){
			//		mg._alertNote({"eleid":"in_text","errpos":$("in_text").up(),"eclick":"in_text","efocus":"in_text","msg":"文字内容超过20个字，请修改"});return;
			//	}
			//	noteedit_gift.each(function(o){
			//		if(o.checked){
			//			noteedit_gift_string += noteedit_gift_string == '' ? o.value : ',' + o.value;
			//		}
			//	}.bind(this));
			//
			//	if(noteedit_gift_string == ''){
			//		mg._alertNote({"eleid":"noteedit_gift","errpos":$("noteedit_gift").up(),"eclick":"noteedit_gift","efocus":"noteedit_gift","msg":"请选择1~3个礼物"});return;
			//	}
			//	if($('in_ismsg_yes').checked == true){
			//		in_ismsg = 1;
			//		in_msgcontent = trim($('in_msgcontent').value);
			//		if(in_msgcontent  ==  ''){
			//			mg._alertNote({"eleid":"in_msgcontent","errpos":$("in_msgcontent").up(),"eclick":"in_msgcontent","efocus":"in_msgcontent","msg":"私信内容不能为空，请修改"});return;
			//		}
			//		if(in_msgcontent.length  >  200){
			//			mg._alertNote({"eleid":"in_msgcontent","errpos":$("in_msgcontent").up(),"eclick":"in_msgcontent","efocus":"in_msgcontent","msg":"私信内容超过200个字，请修改"});return;
			//		}
			//	}
			//	break;
			case 5:
				//衍生品
				var text,in_text = $('in_text');
				text = trim(in_text.value.replace(/<[^>]*?>/ig, ""));
				in_text.value = text;

				if(text.length == 0){
					mg._alertNote({"eleid":"in_text","errpos":$("in_text").up(),"eclick":"in_text","efocus":"in_text","msg":"文字内容不能为空，请输入内容"});return;
				}
				if(text.length > 12){
					mg._alertNote({"eleid":"in_text","errpos":$("in_text").up(),"eclick":"in_text","efocus":"in_text","msg":"文字内容超过12个字，请修改"});return;
				}

				//链接解释
				var in_rim_id = trim($('in_rim_id').value);
				if(in_rim_id.length == 0){
					mg._alertNote({"eleid":"in_rim_id","errpos":$("in_rim_id").up(),"eclick":"in_rim_id","efocus":"in_rim_id","msg":"商品ID不能为空，请输入内容"});return;
				}
				break;
			case 6:

				//标题检查
				var title,in_title = $('noteedit_saleedit_title'),noteedit_saleedit = $('noteedit_saleedit');
				title = trim(in_title.value.replace(/<[^>]*?>/ig, ""));
				in_title.value = title;

				$('noteedit_sale_actionbt').onclick = function(){
					$('input_error').style.display = 'none';
					$('noteedit').select('.form_input_error').each(function(o){
						o.removeClassName('form_input_error');
					}.bind(this));
				}
				if(noteedit_saleedit.style.display == 'none'){
					mg._alertNote({"eleid":"noteedit_saleadd","errpos":$("noteedit_saleadd").up(),"eclick":"noteedit_saleadd","efocus":"noteedit_saleadd","msg":"请选择商品或添加链接"});return;
				}

				if(title.length == 0){
					mg._alertNote({"eleid":"noteedit_saleedit_title","errpos":$("noteedit_saleedit_title").up(),"eclick":"noteedit_saleedit_title","efocus":"noteedit_saleedit_title","msg":"商品名称不能为空，请输入"});return;
				}
				if(title.length > 15){
					mg._alertNote({"eleid":"noteedit_saleedit_title","errpos":$("noteedit_saleedit_title").up(),"eclick":"noteedit_saleedit_title","efocus":"noteedit_saleedit_title","msg":"商品名称超过15个字，请修改"});return;
				}
				//简介检查
				var summary,in_summary = $('noteedit_saleedit_summary');
				summary = trim(in_summary.value.replace(/<[^>]*?>/ig, ""));
				in_summary.value = summary;

				if(summary.length > 20){
					mg._alertNote({"eleid":"noteedit_saleedit_summary","errpos":$("noteedit_saleedit_summary").up(),"eclick":"noteedit_saleedit_summary","efocus":"noteedit_saleedit_summary","msg":"商品描述超过20个字，请修改"});return;
				}
				//价格检查
				var in_pps_ccost = $('in_pps_ccost'),in_pps_cost = $('in_pps_cost');
				var v_pps_ccost = trim(in_pps_ccost.value),v_pps_cost = trim(in_pps_cost.value);
				if (!v_pps_ccost.match(/^\d+$|^\d+\.\d{1,2}$/)) {
					mg._alertNote({"eleid":"in_pps_ccost","errpos":$("noteedit_saleedit_detail").up(),"eclick":"in_pps_ccost","efocus":"in_pps_ccost","msg":"价格最多支持2位小数，请修改"});return;
				}
				if (!v_pps_cost.match(/^\d+$|^\d+\.\d{1,2}$/)) {
					mg._alertNote({"eleid":"in_pps_cost","errpos":$("noteedit_saleedit_detail").up(),"eclick":"in_pps_cost","efocus":"in_pps_cost","msg":"价格最多支持2位小数，请修改"});return;
				}

				//图片检查
				var add_trad_pic = $('add_trad_pic');
				if (add_trad_pic.src.match(/default_avatar/im)) {
					mg._alertNote({"eleid":"bgImgPHEle","errpos":$("bgImgPHEle").up(),"eclick":"bgImgPHEle","efocus":"bgImgPHEle","msg":"图片不能为空，请上传"});return;
				}

				break;
			default:
				return '';
				break;
		}

		//整理data
		var data = {};
		data.type = this.noteCurrentType;
		data.start = this.re_time_format(in_start);
		data.end = this.re_time_format(in_end);

		if(this.actType == 2){
			//data.id = this.noteCurrent.readAttribute('_id');
			data.id = this.noteCurrentData.id;
			if(typeof this.noteCurrentData.pkgid != 'undefined' ){
				data.pkgid = this.noteCurrentData.pkgid;
			}

			if(data.type == 3 || data.type == 4){
				if(typeof this.noteCurrentData.msgid != 'undefined' ){
					data.msgid = this.noteCurrentData.msgid;
				}
			}
		}

		switch(data.type){
			case 1:
				data.text = text;
				data.href = in_href;

				var pos = document.getElementsByName('in_pos');
				if(pos[0].checked == true){
					data.pos = 'left';
				}else if(pos[1].checked == true){
					data.pos = 'center';
				}else if(pos[2].checked == true){
					data.pos = 'right';
				}else{
					data.pos = 'left';
				}
				break;
			case 2:
				data.text = text;
				// 类别和url
				data.temp_type = temp_type;
				if ( temp_type == 3 ) {
					data.video_urls = [];
					data.vurl1 = trim( $('videourl1').value ) ;
					if ( data.vurl1 != "" ) {
						data.video_urls.push(data.vurl1);
					}
					data.vurl2 = trim( $('videourl2').value ) ;
					if ( data.vurl2 != "" ) {
						data.video_urls.push(data.vurl2);
					}
					data.vurl3 = trim( $('videourl3').value ) ;
					if ( data.vurl3 != "" ) {
						data.video_urls.push(data.vurl3);
					}
				}
				break;
			case 3:
				data.text = text;
				data.price1 = '';
				data.price2 = '';
				data.price3 = '';
				var j = 1,pe,rpe;
				for (var i=1; i<=3; i++){
					pe = 'in_price'+ i;
					if($(pe).value != ''){
						rpe = 'price'+ j;
						data[rpe] = $(pe).value;
						j++;
					}
				}
				data.ismsg = in_ismsg;
				data.msgcontent = in_msgcontent;
				break;
			case 4:
				data.text = text;
				data.gift = noteedit_gift_string;
				data.ismsg = in_ismsg;
				data.msgcontent = in_msgcontent;
				break;
			case 5:
				data.text = text;
				data.rim_id = in_rim_id;
				break;
			case 6:
				data.pps_title = title;
				data.pps_summary   = summary;
				data.pps_ccost   = this.tradCurrentData.pps_ccost = v_pps_ccost;
				data.pps_cost   = this.tradCurrentData.pps_cost = v_pps_cost;
				//data.pps_ccost   = v_pps_ccost;
				//data.pps_cost   = v_pps_cost;
				data.pps_commission   = this.tradCurrentData.pps_commission;
				data.pps_rim_source   = this.tradCurrentData.pps_rim_source;
				data.pps_category_name   = this.tradCurrentData.pps_category_name;
				data.pps_rim_id   = this.tradCurrentData.pps_rim_id;
				data.pps_link   = this.tradCurrentData.pps_link;
				data.pps_icon_small   = add_trad_pic.src;
				data.pps_detail   = this._saleedit_detail_format(this.tradCurrentData,0);
				break;
			default:
				return '';
				break;
		}

		data.startFormat = in_start;
		data.endFormat = in_end;
		data.vid = NoteEnVid;

		this.render_html = function(){
			//赋值到页面
			var renderParams = {'note':data};
			YKUC.render(function(html) {
				this.isvalueedit = 0;
				var tdiv = document.createElement( "div" );
				$(tdiv).writeAttribute('class','eventpoint ep_buy_inf');
				$(tdiv).writeAttribute('_id',data.id);
				delete data.act;
				delete data.vid;
				if(data.type == 6){delete data.pps_detail;}
				$(tdiv).writeAttribute('_nt','data');
				data.dataString = encodeURIComponent(JSON.stringify(data));
				$(tdiv).writeAttribute('data',data.dataString);

				tdiv.innerHTML = html;
				$(insertPost).insert({before: tdiv});
				if(this.noteCurrent){
					this.noteCurrent.remove();
				}
				$('noteedit').style.display='none';
				var notesList = $('timeline').select('[_nt="data"]');
				$('commentinfo').down('h2').innerHTML = '创收设置(' + notesList.length + '/'+this.notesLength+')';

				if(notesList.length >= this.notesLength){
					$('noteadd').style.display = 'none';
				}else{
					$('noteadd').style.display = 'block';
				}
				var noteBegin = notesList[0],noteEnd = notesList[notesList.length-1];
				var noteBeginData = noteBegin.readAttribute('data'),noteEndData = noteEnd.readAttribute('data');
				noteBeginData = (decodeURIComponent(noteBeginData)).evalJSON(1);
				noteEndData = (decodeURIComponent(noteEndData)).evalJSON(1);
				if(noteBeginData.start <= 0){
					$('timebegin').style.display = 'none';
				}else{
					$('timebegin').style.display = 'block';
				}
				if(noteEndData.end+1 > NoteSeconds){
					$('noteadd').down('.timepoint').innerHTML = mg.time_format(NoteSeconds);
				}else{
					$('noteadd').down('.timepoint').innerHTML = mg.time_format(noteEndData.end+1);
				}
			}.bind(this),{element: annotate_show_tpl, type: '<'},renderParams);
		}.bind(this);

		var edit_ok = $('edit_ok'),is_get_res = null;
		edit_ok.innerHTML = '<div style="width: 58px; height: 22px;"><span class=" ico__loading_16 "></span></div>';
		edit_ok.addClassName('form_btn_disabled');
		data.act = this.actType;
		nova_request(function(res) {
			edit_ok.innerHTML = '<span class="form_btn_text" onclick="hz.postHz(4008738, 1000529);actnote_mg.annotate_addOk();">保&#12288;存</span>';
			edit_ok.removeClassName('form_btn_disabled');

			res = typeof res == 'object' ? res : res.toString().stripScripts().evalJSON(true);
			is_get_res = true;
			if(typeof res.error != 'undefined' && res.error == 0){
				//成功
				data.id = res.id;
				if(res.pkgid)data.pkgid = res.pkgid;
				this.render_html();
			}else{
				//失败
				if(res == -10001){
					mg._alertNote({"eleid":"in_text","errpos":$("in_text").up(),"eclick":"in_text","efocus":"in_text","msg":"文字内容含有禁忌词，请修改"});return;
				}else if(res == -10002){
					mg._alertNote({"eleid":"in_msgcontent","errpos":$("in_msgcontent").up(),"eclick":"in_msgcontent","efocus":"in_msgcontent","msg":"私信内容含有禁忌词，请修改"});return;
				}else if(res == -6){
					mg._alertNote({"eleid":"in_start","errpos":$("in_start").up(0),"eclick":"in_start","efocus":"in_start","msg":"该时间段内含有其他互动控件，请修改"});return;
				}else if(res == -999){
					mg._alertNote({"eleid":"in_rim_id","errpos":$("in_rim_id").up(),"eclick":"in_rim_id","efocus":"in_rim_id","msg":"商品ID不支持，请重新修改"});
				}else{
					mg._alertNote({"eleid":"in_text","errpos":$("in_text").up(),"eclick":"in_text","efocus":"in_text","msg":"失败，请取消重试"});
				}
			}
		}.bind(this), '/u/videos/actnotesave/vid_' + NoteEnVid + '.html', data, 'post');
		setTimeout(function(){
			if(!is_get_res){
				this.is_open = 1;
				mg._alertNote({"eleid":"in_text","errpos":$("in_text").up(),"eclick":"in_text","efocus":"in_text","msg":"服务器无响应，请取消重试"});return;
			}else{
				edit_ok.innerHTML = '<span class="form_btn_text" onclick="hz.postHz(4008738, 1000529);actnote_mg.annotate_addOk();">保&#12288;存</span>';
				edit_ok.removeClassName('form_btn_disabled');
				is_get_res = null;
			}
		}.bind(this), 60000);
	},
	annotate_selectpos: function(){
		var pos = document.getElementsByName('in_pos');
		if(pos[0].checked == true){
			$('noteedit_showtext').writeAttribute('class','possketch');
		}else if(pos[1].checked == true){
			$('noteedit_showtext').writeAttribute('class','possketch possketch_center');
		}else if(pos[2].checked == true){
			$('noteedit_showtext').writeAttribute('class','possketch possketch_right');
		}else{
			pos[0].checked = true;
			$('noteedit_showtext').writeAttribute('class','possketch');
		}
	},
	annotate_selectmsg: function(){
		if($('in_ismsg_yes').checked == true){
			$('noteedit_msgcontent').style.display = 'block';
			$('in_msgcontent').value = $('msgInitContent').innerHTML;
		}else{
			$('noteedit_msgcontent').style.display = 'none';
		}
	},
	annotate_addCancel: function(){
		this.isvalueedit = 0;
		var noteadd = $('noteadd');
		var noteedit = $('noteedit');
		if(this.noteCurrent){
			this.noteCurrent.style.display = 'block';
			noteedit.insert({before: this.noteCurrent});
		}



		$('input_error').style.display = 'none';
		$('noteedit').select('.form_input_error').each(function(o){
			o.removeClassName('form_input_error');
		});
		$('noteedit').style.display = 'none';

		var notesList = $('timeline').select('[_nt="data"]');
		if(notesList.length >= this.notesLength){
			noteadd.style.display = 'none';
		}else{
			noteadd.style.display = 'block';
		}
	},
	annotate_dropedit:function(type){
		if(type == 1){
			this.annotate_addCancel();
			this.isvalueedit = 0;
		}else{
			this.isvalueedit = 1;
			$('in_start').focus();
		}
		if(this.qwindow)this.qwindow.hide();
	},
	annotate_delete_ok: function(){
		if(this.qwindow)this.qwindow.hide();
		if(this.noteCurrent){
			var id = this.noteCurrent.readAttribute('_id');;
			nova_request(function(res) {
				if(res == 1){
					this.noteCurrent.remove();
					//alert('删除成功！');
					if(!this.qwindow)this.qwindow = this._createwin();
					this.qwindow
						.setSize(130,60)
						.setContent("html", document.getElementById("cont41").innerHTML)
						.hideHandle()
						.hideMask()
						.show();

					this._timeoutWindow = this.qwindow;
					delete this.qwindow;
					setTimeout(function(){
						this._timeoutWindow.hide();
					}.bind(this), 3000);

					var notesList = $('timeline').select('[_nt="data"]'),noteadd = $('noteadd');
					$('commentinfo').down('h2').innerHTML = '创收设置(' + notesList.length + '/'+this.notesLength+')';
					if(notesList.length >= this.notesLength){
						noteadd.style.display = 'none';
					}else{
						noteadd.style.display = 'block';
						if(notesList.length == 0){
							$('timebegin').style.display = 'block';
							$('noteadd').down('.timepoint').innerHTML = mg.time_format(0);
						}else{
							var noteBegin = notesList[0],noteEnd = notesList[notesList.length-1];
							var noteBeginData = noteBegin.readAttribute('data'),noteEndData = noteEnd.readAttribute('data');
							noteBeginData = (decodeURIComponent(noteBeginData)).evalJSON(1);
							noteEndData = (decodeURIComponent(noteEndData)).evalJSON(1);
							if(noteBeginData.start <= 0){
								$('timebegin').style.display = 'none';
							}else{
								$('timebegin').style.display = 'block';
							}
							if(noteEndData.end+1 > NoteSeconds){
								$('noteadd').down('.timepoint').innerHTML = mg.time_format(NoteSeconds);
							}else{
								$('noteadd').down('.timepoint').innerHTML = mg.time_format(noteEndData.end+1);
							}
						}
					}
				}else{
					//alert('删除失败！');
					if(!this.qwindow)this.qwindow = this._createwin();
					this.qwindow
						.setSize(240,110)
						.setContent("html", document.getElementById("cont51").innerHTML)
						.hideHandle()
						.hideMask()
						.show();

					this._timeoutWindow = this.qwindow;
					delete this.qwindow;
					setTimeout(function(){
						this._timeoutWindow.hide();
					}.bind(this), 3000);
				}
			}.bind(this), '/u/videos/actnotesave/vid_' + NoteEnVid + '.html', {"act":3,"id":id}, 'post');
		}
		//this.isvaluechange = 1;
	},
	time_format: function(seconds,rHour){
		var hour=0,minute=0,second=seconds%60;
		var rHour = rHour||true;
		if(rHour){
			if(seconds>=3600){
				hour=Math.floor(seconds/3600);
			}
			minute=Math.floor((seconds%3600)/60);
		}else{
			minute=Math.floor(seconds/60);
		}
		if(hour<10)hour = '0'+ hour;
		if(minute<10)minute = '0'+ minute;
		if(second<10)second = '0'+ second;
		return hour + ':' + minute + ':' +second;
	},
	re_time_format: function(t) {
		if (!this.annotate_ctime(t))return 0;
		var tt = t.split(/:/i);
		var seconds =0,second=parseInt(tt[2],10),minute=parseInt(tt[1],10),hour=parseInt(tt[0],10);
		seconds = hour*3600 + minute*60 + second
		return seconds;
	},
	annotate_hrefcheck: function(){
		var in_href = trim($('in_href').value);
		if(in_href.length > 0){
			if (in_href.match(/http:\/\/((youku)|(soku)|(tudou))\.com/i)) {
				in_href = in_href.replace(/http:\/\//ig, "http://www.");
			}else if(in_href.match(/^((youku)|(soku)|(tudou))\.com/i)) {
				in_href = 'http://www.'+ in_href;
			}else if(!in_href.match(/^http:\/\//i)) {
				in_href = 'http://'+ in_href;
			}
			$('in_href').value = in_href;
		}
	},
	annotate_edit: function(o){
		if(!this.annotate_isvalueedit())return false;
		this.is_open = 1;
		this.isvalueedit = 1;
		this.actType = 2;
		var noteE = $(o).up('[_nt="data"]');
		this.noteCurrent = noteE;
		var aa = noteE.previousSiblings(),previous=aa.length,edit_ok = $('edit_ok');

		edit_ok.innerHTML = '<span class="form_btn_text" onclick="hz.postHz(4008738, 1000529);actnote_mg.annotate_addOk();">保&#12288;存</span>';
		edit_ok.removeClassName('form_btn_disabled');

		if(aa.length>0){
			aa.each(function(o){
				if(o.id == 'timebegin' || o.id == 'noteedit'){
					previous--;
				}
			}.bind(this));
		}
		this.noteCurrent_sort = previous+1;


		var data = noteE.readAttribute('data');
		data = (decodeURIComponent(data)).evalJSON(1);
		this.noteCurrentData = data;
		var noteedit = $('noteedit');
		noteE.insert({after: noteedit});
		$('in_start').value = this.noteCurrent_in_start = mg.time_format(data.start);
		$('in_end').value = this.noteCurrent_in_end = mg.time_format(data.end);
		noteedit.down('.timepoint').innerHTML = this.noteCurrent_in_start;

		$('input_error').style.display = 'none';
		//示意图初始化
		$('noteedit_showtext_init').style.display = 'none';
		$('noteedit_showtext').style.display = 'none';
		$('noteedit_showpic').style.display = 'none';
		$('noteedit_showpicfull').style.display = 'none';
		$('noteedit_reward').style.display = 'none';
		$('noteedit_showgift').style.display = 'none';
		$('noteedit_showrim').style.display = 'none';
		$('noteedit_showsale').style.display = 'none';
		//输入框初始化
		$('noteedit_text').style.display = 'none';
		$('noteedit_href').style.display = 'none';
		$('noteedit_pos').style.display = 'none';
		$('noteedit_price').style.display = 'none';
		$('noteedit_gift').style.display = 'none';
		$('noteedit_rim_id').style.display = 'none';
		$('noteedit_rim_href').style.display = 'none';
		$('noteedit_msg').style.display = 'none';
		$('noteedit_msgcontent').style.display = 'none';
		$('noteedit_temp').style.display = 'none';
		$('noteedit_video_url').style.display = 'none';
		$('noteedit_saleadd').style.display = 'none';
		$('noteedit_saleedit').style.display = 'none';

		noteedit.removeClassName('ep_buy_inf');
		//根据类型处理
		switch(data.type){
			case 1:
				this.noteCurrentType = 1;
				$('noteedit_mapbox').down('h3').innerHTML = '文字注释示意图';
				$('noteedit_showtext_init').style.display = 'block';
				$('noteedit_showtext').style.display = 'block';

				$('noteedit_text').style.display = 'block';
				$('noteedit_href').style.display = 'block';
				$('noteedit_pos').style.display = 'block';
				noteedit.down('h3').innerHTML = '编辑文字注释';
				$('in_text').value = data.text;
				$('in_href').value = data.href;
				$('in_pos_'+data.pos).checked = true;
				this.annotate_selectpos();
				break;
			case 2:
				this.noteCurrentType = 2;
				$('noteedit_mapbox').down('h3').innerHTML = '频道推广示意图';
				$('noteedit_showtext_init').style.display = 'block';
				//$('noteedit_showpicfull').style.display = 'block';
				$('noteedit_showpic').style.display = 'block';
				$('noteedit_temp').style.display = 'block';
				noteedit.down('h3').innerHTML = '编辑频道推广';

				// 订阅文字
				$('noteedit_text').style.display = 'block';
				$('in_text').value = data.text;
				$('in_text').onfocus = function(){
					$('in_text').removeClassName('form_input_defaultvalue');
				}
				for ( var i = 1 ; i <= 3 ; i++){
					var eleUrl = 'videourl' + i , vUrl = 'vurl' + i;
					if(data.temp_type == 3){
						$(eleUrl).value = decodeURIComponent(data[vUrl]);
					}else{
						$(eleUrl).value = '';
					}
				}
				this.channelExtSwitchPreView(data.temp_type); 	//有可能默认的就不是1，不同于add
				break;
			//case 3:
			//      this.noteCurrentType = 3;
			//      $('noteedit_mapbox').down('h3').innerHTML = '打赏互动示意图';
			//	$('noteedit_showtext_init').style.display = 'block';
			//	$('noteedit_reward').style.display = 'block';
			//
			//      $('noteedit_text').style.display = 'block';
			//	$('noteedit_price').style.display = 'block';
			//	$('noteedit_msg').style.display = 'block';
			//	noteedit.down('h3').innerHTML = '编辑打赏互动';
			//      $('in_text').value = data.text;
			//      $('in_price1').value = data.price1;
			//	$('in_price2').value = data.price2;
			//	$('in_price3').value = data.price3;
			//	$('in_price2').disabled = false;
			//	$('in_price3').disabled = false;
			//	if(data.ismsg == 1){
			//		$('in_ismsg_yes').checked = true;
			//		$('noteedit_msgcontent').style.display = 'block';
			//		if(data.msgcontent == ''){
			//			$('in_msgcontent').value = $('msgInitContent').innerHTML;
			//		}else{
			//			$('in_msgcontent').value = data.msgcontent;
			//		}
			//	}else{
			//		$('in_ismsg_no').checked = true;
			//		$('noteedit_msgcontent').style.display = 'none';
			//	}
			//
			//	if(data.price1 > 0){
			//		$('price1_mapbox').innerHTML = data.price1 + '优豆';
			//		$('price1_mapbox').style.display = 'block';
			//	}else{
			//		$('price1_mapbox').style.display = 'none';
			//	}
			//	if(data.price2 > 0){
			//		$('price2_mapbox').innerHTML = data.price2 + '优豆';
			//		$('price2_mapbox').style.display = 'block';
			//	}else{
			//		$('price2_mapbox').style.display = 'none';
			//	}
			//	if(data.price3 > 0){
			//		$('price3_mapbox').innerHTML = data.price3 + '优豆';
			//		$('price3_mapbox').style.display = 'block';
			//	}else{
			//		$('price3_mapbox').style.display = 'none';
			//	}
			//	$('in_text').onfocus = function(){
			//		$('in_text').removeClassName('form_input_defaultvalue');
			//	}
			//      break;
			//case 4:
			//	var gifts = $('noteedit_gift').select('input');
			//      this.noteCurrentType = 4;
			//      $('noteedit_mapbox').down('h3').innerHTML = '送礼互动示意图';
			//	$('noteedit_showtext_init').style.display = 'block';
			//	$('noteedit_showgift').style.display = 'block';
			//
			//      $('noteedit_text').style.display = 'block';
			//	$('noteedit_gift').style.display = 'block';
			//	$('noteedit_msg').style.display = 'block';
			//	noteedit.down('h3').innerHTML = '编辑送礼互动';
			//      $('in_text').value = data.text;
			//	if(typeof data.gift != 'undefined'){
			//		gifts.each(function(o){
			//			if(-1 != data.gift.toString().indexOf(o.value)){
			//				o.checked = true;
			//			}else{
			//				o.checked = false;
			//			}
			//		}.bind(this));
			//
			//	}
			//	$('noteedit_showgift_text').innerHTML = '<span class="fans_num_right">已收到XX人气</span>';
			//	if(data.ismsg == 1){
			//		$('in_ismsg_yes').checked = true;
			//		$('noteedit_msgcontent').style.display = 'block';
			//		if(data.msgcontent == ''){
			//			$('in_msgcontent').value = $('msgInitContent').innerHTML;
			//		}else{
			//			$('in_msgcontent').value = data.msgcontent;
			//		}
			//	}else{
			//		$('in_ismsg_no').checked = true;
			//		$('noteedit_msgcontent').style.display = 'none';
			//	}
			//	$('in_text').onfocus = function(){
			//		$('in_text').removeClassName('form_input_defaultvalue');
			//	}
			//	this.annotate_select_gift();
			//      break;
			case 5:
				this.noteCurrentType = 5;
				$('noteedit_mapbox').down('h3').innerHTML = '佣金推广示意图';
				$('noteedit_showtext_init').style.display = 'block';
				$('noteedit_showrim').style.display = 'block';

				$('noteedit_text').style.display = 'block';
				$('noteedit_rim_id').style.display = 'block';
				$('noteedit_rim_href').style.display = 'block';
				noteedit.down('h3').innerHTML = '编辑佣金推广';
				$('in_text').value = data.text;
				$('in_rim_id').value = data.rim_id;
				break;
			case 6:
				noteedit.addClassName('ep_buy_inf');
				this.noteCurrentType = 6;
				$('noteedit_mapbox').down('h3').innerHTML = '边看边买示意图';
				$('noteedit_showtext_init').style.display = 'block';
				$('noteedit_showsale').style.display = 'block';
				$('noteedit_saleadd').style.display = 'block';
				$('noteedit_saleedit').style.display = 'block';
				noteedit.down('h3').innerHTML = '编辑边看边买';
				this.tradCurrentData = data;
				$('noteedit_saleedit_title').value = data.pps_title;
				$('noteedit_saleedit_summary').value = data.pps_summary;
				$('noteedit_saleedit_detail').innerHTML = this._saleedit_detail_format(data,1);
				$('add_trad_pic').src = data.pps_icon_small;

				$('input_error').style.display = 'none';
				$('noteedit').select('.form_input_error').each(function(o){
					o.removeClassName('form_input_error');
				}.bind(this));
				break;
			default:
				alert('参数错误!');
				return;
				break;
		}

		noteedit.style.display = 'block';
		$('YK_manager_tips').insert({top: this.noteCurrent});
	},
	// 频道推广，展示不同的示意图
	channelExtSwitchPreView: function (type){
		var type = parseInt(type,10)|| 1;
		var id = 'in_temp_type_'+type.toString();
		switch(type){
			case 1:
				$(id).checked = true;
				$('noteedit_showtext_init').style.display = 'block';
				$('noteedit_showpic').style.display = 'block';
				$('noteedit_showpicfull').style.display = 'none';
				$('noteedit_video_url').style.display = 'none';
				$('noteedit_mapbox').down('h3').innerHTML = '频道推广示意图(标准版)';
				break;
			case 2:
				//$(id).checked = true;
				break;
			case 3:
				$(id).checked = true;
				$('noteedit_showtext_init').style.display = 'none';
				$('noteedit_showpic').style.display = 'none';
				$('noteedit_showpicfull').style.display = 'block';
				$('noteedit_video_url').style.display = 'block';
				$('noteedit_mapbox').down('h3').innerHTML = '频道推广示意图(全屏版)';
				break;
			default:
				return;
		}
	},
	selectTradV1: function(){
		this.escapeAclick();
		if(!this.qwindowTrad)this.qwindowTrad = this._createwin();
		this.qwindowTrad
			.setSize(840,500)
			.setContent("element", $("contTradlist1"))
			.showHandle()
			.show();
		this.qwindowTrad.showMask();

		$('tradlistHd').innerHTML = '<h3>商品列表</h3>';
		$('tradlist').innerHTML = '<div style="text-align:center;padding-top:120px"><span class="ico__loading_32"></span></div>';
		$('tradlistAction').innerHTML = '<div class="closeaction"><div onclick="actnote_mg.selectTradCancel();" class="form_btn form_btn_l form_btnsub_l"><span class="form_btn_text">关  闭</span></div></div>';

		nova_request(function(res) {
			if(res.total == 0){
				$('tradlistHd').innerHTML = '<h3>商品列表</h3>';
				$('tradlist').innerHTML = '<div class="add">\
						<a href="javascript:;" onclick="actnote_mg.editTrad(this,\'add\')">+ 添加新商品</a>\
					</div>';
				$('tradlistAction').innerHTML = '<div class="closeaction"><div onclick="actnote_mg.selectTradCancel();" class="form_btn form_btn_l form_btnsub_l"><span class="form_btn_text">关  闭</span></div></div>';
			}else if(res.total >= this.tradLength){
				$('tradlistHd').innerHTML = '<h3>商品列表</h3><span class="goodnum"> (<span class="max">' + this.tradLength + '</span>/' + this.tradLength + ')</span><span class="addtip">您最多可以添加' + this.tradLength + '个商品</span>';
				$('tradlist').innerHTML = res.content;
				$('tradlistAction').innerHTML = '<div class="addaction">\
						<div class="form_btn form_btn_l form_btnmaj_l"><span class="form_btn_text" onclick="actnote_mg.selectTradOk();">提  交</span></div>\
						<div class="form_btn form_btn_l form_btnsub_l"><span class="form_btn_text" onclick="actnote_mg.selectTradCancel();">取&#12288;消</span></div>\
					</div>';
			}else{
				$('tradlistHd').innerHTML = '<h3>商品列表</h3><span class="goodnum"> (' + res.total + '/' + this.tradLength + ')</span><a class="addnew" href="javascript:;" onclick="actnote_mg.editTrad(this,\'add\')">+ 添加新商品</a>';
				$('tradlist').innerHTML = res.content;
				$('tradlistAction').innerHTML = '<div class="addaction">\
						<div class="form_btn form_btn_l form_btnmaj_l"><span class="form_btn_text" onclick="actnote_mg.selectTradOk();">提  交</span></div>\
						<div class="form_btn form_btn_l form_btnsub_l"><span class="form_btn_text" onclick="actnote_mg.selectTradCancel();">取&#12288;消</span></div>\
					</div>';
			}
			$('tradlist').select('li').each(function(o){
				var oInput = o.down('input');
				if(this.tradCurrentData && this.tradCurrentData.id == oInput.value){
					o.addClassName('current');
					oInput.checked = true;
				}else{
					o.removeClassName('current');
					oInput.checked = false;
				}

				o.onclick = function(event){
					var currentInput = o.down('input'),source = Element.extend(Event.element(event));
					if(source.nodeName.toLowerCase() == 'a')return;
					if(source.up('a'))return;
					$('tradlist').select('li').each(function(oo){
						oo.removeClassName('current');
					});
					o.addClassName('current');
					if(source.nodeName.toLowerCase() == 'input'){
						if(currentInput.checked == true){
							o.addClassName('current');
						}else{
							o.removeClassName('current');
						}
					}else{
						if(currentInput.checked == true){
							currentInput.checked = false;
							o.removeClassName('current');
						}else{
							currentInput.checked = true;
							o.addClassName('current');
						}
					}

				};
			}.bind(this));
		}.bind(this), '/u/videos/gettradlist', {}, 'get');
	},
	selectTrad: function(actionType){
		this.escapeAclick();
		//if(Nova.Cookie.get('bkbmselect') != 1){
		//	this._editTradGuide.trigger(1);
		//	if(actionType == 'link'){
		//		this.selectTradActionType = 'link';
		//	}else{
		//		this.selectTradActionType = '';
		//	}
		//	return;
		//}
		if(Prototype.Browser.IE == true || !this.qwindowTrad || ("ActiveXObject" in window)){
			this.qwindowTrad = this._createwin();
			$(this.qwindowTrad.getElements().winbg).remove();
			this.qwindowTrad.setShowCallback(function(){
				var win = this.qwindowTrad.getElements().win;
				var top = win.offsetTop;
				if(top<0){
					this.qwindowTrad.setPos(10);
				}

			}.bind(this));
		}

		this.qwindowTrad
			.setSize(840,660)
			.setContent("element", $("contTradlist1"))
			.showHandle()
			.show();
		this.qwindowTrad.showMask();


		var _this = this;
		//change menu
		if(actionType && actionType == 'link'){
			try{
				setTimeout(function(){
					if($('menu_linkgood')!=null){
						_this.switchTabMenu($('menu_linkgood'));
					}
				},100);
			}catch(e){}
		}else{
			try{
				setTimeout(function(){
					if($('menu_linkgood')!=null){
						if($('menu_linkgood').hasClassName('current')){
							_this.switchTabMenu($('menu_commgood'));
						}
					}
				},100);
			}catch(e){}
		}
		if(_this.cateLoaded == 1){
			if(Prototype.Browser.IE){
				_this._showCategory();
			}
			return;
		}

		//Colse the tips
		Event.observe($('contTradlist1').down('.icon-close-gray'), 'click', function(){
			this.up('.content').addClassName('no-prompt');
		});

		//First Load category
		_this._showCategory();

		//Show category
		Event.observe($('commgood').down('.select-head'),'click',function(e){
			var target = e.target || e.srcElement;
			var dropElement = $('commgood').down('.select-drop');
			if(dropElement.style.display=='none'){
				dropElement.style.display='block';
			}else{
				dropElement.style.display='none';
			}
		});
		//Show category
		Event.observe($('commgood').down('.select-head-scale'),'click',function(e){
			var target = e.target || e.srcElement;
			var dropElement = $('commgood').down('.select-drop-scale');
			if(dropElement.style.display=='none'){
				dropElement.style.display='block';
			}else{
				dropElement.style.display='none';
			}
		});

		//AddEvent for search
		Event.observe($('submitQuery'),'click',function(){
			var scale = $('commgood').down('.select-head-scale').down('.col').getAttribute('value');
			if(_this.timestamp==0){
				_this.timestamp = _this._getCurrentTimestamp();
				_this._showRecommend({'scale':scale});
			}else{
				var nowtimestamp = _this._getCurrentTimestamp();
				if((nowtimestamp-_this.timestamp)>1500){
					_this.timestamp = nowtimestamp;
					_this._showRecommend({'scale':scale});
				}
			}
		});
		//Enter event
		Event.observe($('commgood'),'keydown',function(event){
			if(event.keyCode == 13){
				if(_this.timestamp==0){
					_this.timestamp = _this._getCurrentTimestamp();
					_this._showRecommend({});
				}else{
					var nowtimestamp = _this._getCurrentTimestamp();
					if((nowtimestamp-_this.timestamp)>1500){
						_this.timestamp = nowtimestamp;
						_this._showRecommend({});
					}
				}
			}
		});
		//Textarea Event-focus
		Event.observe($('linktextarea'),'focus',function(event){
			$('sourceError').style.display='none';
			$('conditionError').style.display='none';
			$('linkgoodRet').innerHTML = '';
			var linkTxt = $('linktextarea').value;
			linkTxt = linkTxt.replace(/^\s+/,'').replace(/\s+$/,'');
			if(linkTxt=='请输入商品链接'){
				$('linktextarea').value = '';

			}
		});
		//Textarea Event-keyup
		Event.observe($('linktextarea'),'keyup',function(event){
			var linkTxt = $('linktextarea').value;
			linkTxt = linkTxt.replace(/^\s+/,'').replace(/\s+$/,'');
			if(linkTxt==''){
				$('linkgood').down('.form_btn').removeClassName('form_btnmaj_l').addClassName('form_btnsub_l');
			}else{
				$('linkgood').down('.form_btn').removeClassName('form_btnsub_l').addClassName('form_btnmaj_l');
			}
		});
		////Textarea Event-submit
		Event.observe($('linkgood').down('.form_btn'),'click',function(event){
			var linkTxt = $('linktextarea').value;
			linkTxt = linkTxt.replace(/^\s+/,'').replace(/\s+$/,'');
			if(linkTxt.length>0){
				_this._showLinkRet(linkTxt);
			}
		});
		//Reset Event
		Event.observe($('resetQuery'),'click',function(event){
			$('commMinPrice').value = '';
			$('commMaxPrice').value = '';
			// $('commMinScale').value = '';
			// $('commMaxScale').value = '';
			$('searchTxt').value = '';
			if(_this.cateLoaded==1){
				$('commgood').down('.select-drop').style.display = 'none';
				if(Prototype.Browser.Gecko){
					$('commgood').down('.select-head').down('.col').innerHTML = '全部';
				}else{
					$('commgood').down('.select-head').down('.col').innerText = '全部';
				}
				$('commgood').down('.select-head').down('.col').writeAttribute('value','1_0');
				$('commgood').down('.select-drop').down('.current').removeClassName('current');
				$('commgood').down('.select-drop').down('.col').addClassName('current');
				_this._showRecommend({'cate':'1_0'});
			}
			if(_this.rateLoaded==1){
				$('commgood').down('.select-drop-scale').style.display = 'none';
				if(Prototype.Browser.Gecko){
					$('commgood').down('.select-head-scale').down('.col').innerHTML = '5%-10%';
				}else{
					$('commgood').down('.select-head-scale').down('.col').innerText = '5%-10%';
				}
				$('commgood').down('.select-head-scale').down('.col').writeAttribute('value','2');
				$('commgood').down('.select-drop-scale').down('.current').removeClassName('current');
				$('commgood').down('.select-drop-scale').down('.col',1).addClassName('current');
				_this._showRecommend({'cate':'1_0','scale':'2'});
			}
			/*
			 var tVal = $('commgood').down('.select-head').down('.col').readAttribute('value');
			 _this._showRecommend({'cate':tVal});
			 if(_this.cateHtml){
			 $('commgood').down('.select-drop').style.display = 'none';
			 $('commgood').down('.select-drop').innerHTML = _this.cateHtml;
			 $('commgood').down('.select-head').down('.col').innerText = '不限';
			 $('commgood').down('.select-head').down('.col').writeAttribute('value','1_0');
			 $('commgood').down('.select-drop').select('.col').each(function(o){
			 var tVal = o.readAttribute('value');
			 var tTxt = o.innerText;
			 o.onclick = function(event){
			 $('commgood').down('.select-head').down('.col').innerText = tTxt;
			 $('commgood').down('.select-head').down('.col').writeAttribute('value',tVal);
			 $('commgood').down('.select-drop').style.display = 'none';
			 //Reload the recommend
			 _this._showRecommend({'cate':tVal});
			 $('commgood').down('.select-drop').down('.current').removeClassName('current');
			 o.addClassName('current');
			 };
			 });
			 _this._showRecommend({'cate':'1_0'});
			 }*/
		});
		/* 优选商品调用 start */
		window.showPopGoods(NoteUid,this.editTradInit);
		/* 优选商品调用 end */
	},
	//
	switchTabMenu:function(tab){
		var _this = this;
		if(typeof(tab)!='"object"'){
			tab = $(tab);
		}
		var chooseTab = tab.readAttribute('rel');
		var currentTab = $('contTradlist1').down('.current').readAttribute('rel');
		if(currentTab!=chooseTab){
			$('contTradlist1').down('.navi').down('.current').removeClassName('current');
			$(currentTab).style.display = 'none';
			tab.addClassName('current');
			$(chooseTab).style.display = 'block';
			if(chooseTab=="hisgood"){
				//Load the history list
				_this._showHistory();
			}
		}
	},
	//Get current timestamp
	_getCurrentTimestamp:function(){
		return (new Date().getTime());
	},
	//Commgood click action
	_pageAcion:function(obj){
		var tVal = obj.readAttribute('val');
		var scale = $('commgood').down('.select-head-scale').down('.col').getAttribute('value');
		if(this.timestamp==0){
			this.timestamp = this._getCurrentTimestamp();
			this._showRecommend({'page':tVal,'scale':scale});
		}else{
			var nowTimestamp = this._getCurrentTimestamp();
			if((nowTimestamp-this.timestamp)>1000){
				this.timestamp = this._getCurrentTimestamp();
				this._showRecommend({'page':tVal,'scale':scale});
			}
		}
	},
	//Input Filter
	_inputClear:function(inputObj){
		var tVal = inputObj.value.replace(/^\s+/,'').replace(/\s+$/,'');
		if(tVal.length>0){
			inputObj.value = tVal.replace(/[^\d.]/g,'');
			inputObj.value = inputObj.value.replace(/^\./g,'');
			inputObj.value = inputObj.value.replace(/\.{2,}/g,'.');
			inputObj.value = inputObj.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
		}else{
			inputObj.value = tVal;
		}
	},
	_goodOver:function(good){
		good.addClassName('current');
	},
	_goodOut:function(good){
		good.removeClassName('current');
	},
	_goodClick:function(good,event){
		var target = event.target || event.srcElement;
		if(target.tagName=='A'){
			return;
		}
		var newGood = {}
		newGood.pps_title = good.readAttribute('gt');
		newGood.pps_summary = newGood.pps_title;
		newGood.pps_ccost = good.readAttribute('gcc');
		newGood.pps_cost = good.readAttribute('gc');
		newGood.pps_commission = good.readAttribute('gcomm');
		newGood.pps_rim_source = good.readAttribute('grim');
		//newGood.pps_category_name = good.readAttribute('gca');
		newGood.pps_category_name = 2;//   临时数据 需要修改
		newGood.pps_link = good.readAttribute('glink');
		newGood.pps_icon_small = good.readAttribute('gpic');
		this.editTradInit(newGood);
	},
	_goodRemove:function(id,e){
		//this.delTrad({},id);
		this.delTradOk(id,0);
		if (e && e.stopPropagation){
			e.stopPropagation();
		}else{
			window.event.cancelBubble=true;
		}
	},
	_tipsOver:function(parentNode){
		$(parentNode).down('.prompt-income').style.display = 'block';
	},
	_tipsOut:function(parentNode){
		$(parentNode).down('.prompt-income').style.display = 'none';
	},
	//Show link result
	_showLinkRet:function(linkUrl){
		nova_request(function(res) {
			if(res.error_code==0){
				var ret = res.result;
				var good = {};
				good.pps_title = ret.title;
				good.pps_summary = ret.title;
				good.pps_ccost = ret.promotion_price;
				good.pps_cost = ret.price;
				good.pps_commission = ret.commission;
				if(ret.rim_source){
					good.pps_rim_source = parseInt(ret.rim_source,10)
				}else{
					if(ret.platform_name.match(/淘宝/)){
						good.pps_rim_source= 1;
					}else if(ret.platform_name.match(/天猫/)){
						good.pps_rim_source= 2;
					}else if(ret.platform_name.match(/牛铺/)){
						good.pps_rim_source= 3;
					}else if(ret.platform_name.match(/优酷商城/)){
						good.pps_rim_source= 4;
					}else if(ret.platform_name.match(/丽子美妆/)){
						good.pps_rim_source= 6;
					}else if(ret.platform_name.match(/顺丰海淘/)){
						good.pps_rim_source= 7;
					}
					else if(ret.platform_name.match(/表现主义/)){
						good.pps_rim_source= 8;
					}
					else if(ret.platform_name.match(/优酷游戏PC/)){
						good.pps_rim_source= 11;
					}else if(ret.platform_name.match(/优酷游戏应用商城/)){
						good.pps_rim_source= 12;
					}else if(ret.platform_name.match(/营销活动专题页/)){
						good.pps_rim_source= 13;
					}else{
						good.pps_rim_source= 99;
					}

				}
				good.pps_category_name = ret.category_name;
				good.pps_link = ret.item_url;
				good.pps_icon_small = ret.pic_url;
				this.editTradInit(good);
			}else if(res.error_code==-3){
				$('sourceError').style.display='block';
			}else if(res.error_code==-5){
				$('conditionError').style.display='block';
			}
		}.bind(this), '/u/videos/getbyurl', {url:linkUrl}, 'get');
	},
	//Load the recommentGood
	_showRecommend:function(query){
		var queryParams = {};
		if(query.cate){
			queryParams.cate = query.cate;
		}else{
			queryParams.cate = $('commgood').down('.select-head').down('.col').readAttribute('value');
			var keyword = $('searchTxt').value.replace(/^\s+/,'').replace(/\s+$/,'');
			if(keyword.length>0){
				queryParams.kw = $('searchTxt').value.replace(/^\s+/,'').replace(/\s+$/,'');
			}
			var minPrice = $('commMinPrice').value;
			var maxPrice = $('commMaxPrice').value;
			if(minPrice.length>0 && maxPrice.length==0){
				queryParams.minPrice  = minPrice;
				queryParams.maxPrice  = 1000000;
				$('commMaxPrice').value = 1000000;
			}
			if(maxPrice.length>0 && minPrice.length==0){
				queryParams.minPrice  = 0;
				queryParams.maxPrice  = maxPrice;
				$('commMinPrice').value = 0;
			}
			if(minPrice.length>0 && maxPrice.length>0){
				queryParams.minPrice = minPrice;
				queryParams.maxPrice = maxPrice;
				if(parseFloat(minPrice)> parseFloat(maxPrice)){
					$('commMinPrice').value = maxPrice;
					$('commMaxPrice').value = minPrice;
				}
			}
			/*			var minScale = $('commMinScale').value;
			 var maxScale = $('commMaxScale').value;
			 if(minScale.length>0 && maxScale.length==0){
			 queryParams.minScale  = minScale;
			 queryParams.maxScale  = 100;
			 $('commMaxScale').value = 100;
			 }
			 if(maxScale.length>0 && minScale.length==0){
			 queryParams.minScale  = 0;
			 queryParams.maxScale  = maxScale;
			 $('commMinScale').value = 0;
			 }
			 if(minScale.length>0 && maxScale.length>0){
			 queryParams.minScale  = minScale;
			 queryParams.maxScale  = maxScale;
			 if(parseFloat(minScale) > parseFloat(maxScale)){
			 $('commMinScale').value = maxScale;
			 $('commMaxScale').value = minScale;
			 }
			 }*/
		}
		if(query.scale){
			queryParams.scale = query.scale;
		}
		//Init page number
		if(query.page){
			queryParams.page = query.page;
		}else{
			queryParams.page = 1;
		}

		nova_request(function(res) {
			if((typeof(res.page)=='undefined') || (typeof(res.total)=='undefined')){
				return;
			}
			var resPage = res.page;
			var resCount = res.total;
			if(resCount==0){
				$('goodlists').innerHTML = '<div class="empty"><div class="inline icon-prompt-large"></div><div class="inline"><p>没有找到符合条件的商品，调整查询条件再试试吧~</p></div></div>';
				if(resPage!=1){
					pagerHtml = ' <li val="'+(resPage-1)+'" class="prev" onclick="actnote_mg._pageAcion(this)"><a href="javascript:;" onclick="actnote_mg.escapeAclick();return false;" title="上一页">上一页</a></li>';
				}
				return;
			}
			var pagerHtml = '';
			var nextPage = resPage+1;
			var prexPage = resPage-1;
			if(resPage==1){
				pagerHtml = '<li class="current"><span>1</span></li>';
				if(resCount==10){
					pagerHtml += ' <li val="'+nextPage+'" class="prev" onclick="actnote_mg._pageAcion(this)"><a href="javascript:;" onclick="actnote_mg.escapeAclick();return false;" title="下一页">下一页</a></li>';
				}
			}else if(resPage==10){
				pagerHtml = ' <li val="'+prexPage+'" class="prev" onclick="actnote_mg._pageAcion(this)"><a href="javascript:;" onclick="actnote_mg.escapeAclick();return false;" title="上一页">上一页</a></li>';
				pagerHtml += '<li class="current"><span>10</span></li>';
			}else{
				pagerHtml = ' <li val="'+prexPage+'" class="prev" onclick="actnote_mg._pageAcion(this)"><a href="javascript:;" onclick="actnote_mg.escapeAclick();return false;" title="上一页">上一页</a></li>';
				pagerHtml += '<li class="current"><span>'+resPage+'</span></li>';
				if(resCount==10){
					pagerHtml += ' <li val="'+nextPage+'" class="next" onclick="actnote_mg._pageAcion(this)"><a href="javascript:;" onclick="actnote_mg.escapeAclick();return false;" title="下一页">下一页</a></li>';
				}
			}
			$('commPager').innerHTML = pagerHtml;
			if(res.content){
				$('goodlists').innerHTML = res.content;
			}
		}.bind(this), '/u/videos/getrecommlist', queryParams, 'get');
	},

	//Load the HistoryGood
	_showHistory:function(){
		var _this = this;
		nova_request(function(res) {
			if((typeof(res.content)=='undefined') || (typeof(res.count)=='undefined')){
				return;
			}
			if(res.content){
				var count = res.count;
				if(count==0){
					$('hislists').innerHTML = '<div class="empty"><div class="inline icon-prompt-large"></div> <div class="inline"><p>你还没有添加过商品,赶紧从 推荐商品里选择一个吧~</p></div></div>';
					$('hisgoodul').innerHTML = '';
					return;
				}
				var page = res.page;
				var ceil =  Math.ceil(count/_this.tradLength);
				$('hislists').innerHTML = res.content;
				var pageHtml = _this._getMyPager(page,ceil);
				$('hisgoodul').innerHTML = pageHtml;
			}
		}.bind(this), '/u/videos/gethistory', {}, 'get');
	},
	//My Pager
	_getMyPager:function(page,ceil){
		var pageHtml = '';
		if(ceil<=10){
			for(var i=1;i<=ceil;i++){
				if(i==page){
					pageHtml += '<li class="current"><a href="javascript:;" onclick="actnote_mg.escapeAclick();return false;" title="第'+page+'页">'+page+'</a></li>';
				}else{
					pageHtml += '<li onclick="actnote_mg.loadpageData('+i+');"><a href="javascript:;" onclick="actnote_mg.escapeAclick();return false;" title="第'+i+'页">'+i+'</a></li>';
				}
			}
		}else{
			var prex = page-1;
			var next = page+1;
			if(page!=1){
				pageHtml += '<li class="prev" onclick="actnote_mg.loadpageData('+prex+');"><a href="javascript:;" onclick="actnote_mg.escapeAclick();return false;"  title="上一页">上一页</a></li>';
			}
			if(page<=5){
				for(var i=1;i<=10;i++){
					if(i==page){
						pageHtml += '<li class="current"><a href="javascript:;" onclick="actnote_mg.escapeAclick();return false;" title="第'+page+'页">'+page+'</a></li>';
					}else{
						pageHtml += '<li onclick="actnote_mg.loadpageData('+i+');"><a href="javascript:;" onclick="actnote_mg.escapeAclick();return false;" title="第'+i+'页">'+i+'</a></li>';
					}
				}
			}else if(page > 5 && page <= (ceil-5)){
				for(var m = (page-4);m < page; m++){
					pageHtml += '<li onclick="actnote_mg.loadpageData('+m+');"><a href="javascript:;" onclick="actnote_mg.escapeAclick();return false;" title="第'+m+'页">'+m+'</a></li>';
				}
				pageHtml += '<li class="current"><a href="javascript:;" onclick="actnote_mg.escapeAclick();return false;" title="第'+page+'页">'+page+'</a></li>';
				for(var n = (page+1);n <= (page+5); n++){
					pageHtml += '<li onclick="actnote_mg.loadpageData('+n+');"><a href="javascript:;" onclick="actnote_mg.escapeAclick();return false;" title="第'+n+'页">'+n+'</a></li>';
				}
				pageHtml += '<li class="next" onclick="actnote_mg.loadpageData('+next+');"><a href="javascript:;" onclick="actnote_mg.escapeAclick();return false;" title="下一页">下一页</a></li>';
			}else{
				var len1 =  ceil - page;
				var len2 = 10-(len1+1);
				for(var m = (page-len2);m<=ceil;m++){
					if(m==page){
						pageHtml += '<li class="current"><a href="javascript:;" onclick="actnote_mg.escapeAclick();return false;" title="第'+page+'页">'+page+'</a></li>';
					}else{
						pageHtml += '<li onclick="actnote_mg.loadpageData('+m+');"><a href="javascript:;" onclick="actnote_mg.escapeAclick();return false;" title="第'+m+'页">'+m+'</a></li>';
					}
				}
				if(page!=ceil){
					pageHtml += '<li class="next" onclick="actnote_mg.loadpageData('+next+');"><a href="javascript:;" onclick="actnote_mg.escapeAclick();return false;"  title="下一页">下一页</a></li>';
				}
			}
		}
		return pageHtml;
	},
	//Load the category
	_showCategory:function(){
		var _this = this;
		nova_request(function(res) {
			if((typeof(res.result)=='undefined')){
				return;
			}
			if(res.result.category){
				var tb =  res.result.category;
				tb = tb["1"];
				var cateHtml = '';
				for (var key in tb) {
					if(key == '1_0'){
						cateHtml += '<div class="inline col current" value="'+key+'">'+tb[key]+'</div>';
					}else{
						cateHtml += '<div class="inline col" value="'+key+'">'+tb[key]+'</div>';
					}
				}
				_this.cateLoaded= 1;
				$('commgood').down('.select-drop').innerHTML = cateHtml;
				$('commgood').down('.select-drop').select('.col').each(function(o){
					$(o).observe('click',function(event){
						var targetObj = event.target || event.srcElement;
						var tVal = targetObj.readAttribute('value');
						if(Prototype.Browser.Gecko){
							var tTxt = targetObj.innerHTML;
						}else{
							var tTxt = targetObj.innerText;
						}
						if(Prototype.Browser.Gecko){
							$('commgood').down('.select-head').down('.col').innerHTML = tTxt;
						}else{
							$('commgood').down('.select-head').down('.col').innerText = tTxt;
						}

						$('commgood').down('.select-head').down('.col').writeAttribute('value',tVal);
						$('commgood').down('.select-drop').style.display = 'none';
						//Empty the txt
						$('commMinPrice').value = '';$('commMaxPrice').value = '';
						//$('commMinScale').value = '';$('commMaxScale').value = '';
						$('searchTxt').value = '';
						//Reload the recommend
						_this._showRecommend({'cate':tVal});
						$('commgood').down('.select-drop').down('.current').removeClassName('current');
						targetObj.addClassName('current');
					});
				});
				_this._showRecommend({'cate':'1_0'});
			}
			if(res.result.rate){
				var tb =  res.result.rate;
				var cateHtml = '';
				for(var key in tb){
					if (tb[key]['name'] != 'undefined'){
						if(tb[key]['type']!='undefined'&&tb[key]['type']==0){
							cateHtml+='<div class="col current" onclick="hz.postHz(4010651, 1000926);" value="'+key+'">'+tb[key]['name']+'</div>';
						}else{
							//cateHtml+='<div class="col" value="'+key+'">'+tb[key]['name']+'</div>';
							switch(tb[key]['name']){
								case '5%以下':
									cateHtml+='<div class="col" onclick="hz.postHz(4010650, 1000926);" value="'+key+'">'+tb[key]['name']+'</div>';
									break;
								case '10%-15%':
									cateHtml+='<div class="col" onclick="hz.postHz(4010652, 1000926);" value="'+key+'">'+tb[key]['name']+'</div>';
									break;
								case '15%-20%':
									cateHtml+='<div class="col" onclick="hz.postHz(4010653, 1000926);" value="'+key+'">'+tb[key]['name']+'</div>';
									break;
								case '20%-25%':
									cateHtml+='<div class="col" onclick="hz.postHz(4010654, 1000926);" value="'+key+'">'+tb[key]['name']+'</div>';
									break;
								case '25%-30%':
									cateHtml+='<div class="col" onclick="hz.postHz(4010655, 1000926);" value="'+key+'">'+tb[key]['name']+'</div>';
									break;
								case '30%以上':
									cateHtml+='<div class="col" onclick="hz.postHz(4010656, 1000926);" value="'+key+'">'+tb[key]['name']+'</div>';
									break;
							}
						}
					}
				}
				_this.rateLoaded= 1;
				$('commgood').down('.select-drop-scale').innerHTML = cateHtml;
				$('commgood').down('.select-drop-scale').select('.col').each(function(o){
					$(o).observe('click',function(event){
						var targetObj = event.target || event.srcElement;
						var tVal = targetObj.readAttribute('value');
						if(Prototype.Browser.Gecko){
							var tTxt = targetObj.innerHTML;
						}else{
							var tTxt = targetObj.innerText;
						}
						if(Prototype.Browser.Gecko){
							$('commgood').down('.select-head-scale').down('.col').innerHTML = tTxt;
						}else{
							$('commgood').down('.select-head-scale').down('.col').innerText = tTxt;
						}

						$('commgood').down('.select-head-scale').down('.col').writeAttribute('value',tVal);
						$('commgood').down('.select-drop-scale').style.display = 'none';
						//Empty the txt
						// $('commMinPrice').value = '';$('commMaxPrice').value = '';
						// $('commMinScale').value = '';$('commMaxScale').value = '';
						$('searchTxt').value = '';
						//Reload the recommend
						_this._showRecommend({'scale':tVal});
						$('commgood').down('.select-drop-scale').down('.current').removeClassName('current');
						targetObj.addClassName('current');
					});
				});
				_this._showRecommend({'cate':'1_0','scale':'2'});
			}
		}.bind(this), '/u/videos/getrecommcate', {}, 'get');
	},
	//History Page Event
	loadpageData:function(page,e){
		if(this.timestamp!=0){
			var nowTimestamp = this._getCurrentTimestamp();
			if((nowTimestamp-this.timestamp)<1000){
				return;
			}
		}
		this.timestamp = this._getCurrentTimestamp();
		var _this = this;
		nova_request(function(res) {
			if(res.content){
				var count = res.count;
				if(count==0){
					$('hislists').innerHTML = '<div class="empty"><div class="inline icon-prompt-large"></div> <div class="inline"><p>你还没有添加过商品,赶紧从 推荐商品里选择一个吧~</p></div></div>';
					$('hisgoodul').innerHTML = '';
					return;
				}
				var page = res.page;
				var ceil =  Math.ceil(count/_this.tradLength);
				$('hislists').innerHTML = res.content;
				var pageHtml = _this._getMyPager(page,ceil);
				$('hisgoodul').innerHTML = pageHtml;
			}
		}.bind(this), '/u/videos/gethistory', {page:page}, 'get');
	},
	editTrad: function(o,type,pos){
		this.escapeAclick();
		if(!this.qwindowTradList)this.qwindowTradList = this._createwin();
		this.qwindowTradList
			.setSize(660,610)
			.setContent("element", document.getElementById("contTradAdd"))
			.showHandle()
			.setzIndex(30020)
			.show();
		$('input_error_trad').style.display = 'none';
		$('contTradAdd').select('.form_input_error').each(function(so){
			so.removeClassName('form_input_error');
		});
		if(type == 'add'){
			this.tradCurrent = null;
			this.tradCurrentEiditData = null;
			$('add_trad_head').innerHTML = '添加新商品';
			$('add_trad_title').value = '';
			$('add_trad_text').value = '';
			$('add_trad_link').value = '';
			//$('add_trad_shopmsg').style.display = 'none';
			$('add_trad_originalprice').value = '';
			$('add_trad_marketprice').value = '';
			$('add_trad_pic').src = $('add_trad_pic').readAttribute('_src');
		}else{
			if(pos == 'page'){
				this.tradCurrent = 'page';
				this.tradCurrentEiditData = this.tradCurrentData;
			}else{
				this.tradCurrent = $(o).up('[_nt="data"]');
				this.tradCurrentEiditData = this.tradCurrent.readAttribute('tdata');
				this.tradCurrentEiditData = (decodeURIComponent(this.tradCurrentEiditData)).evalJSON(1);
			}
			var data = this.tradCurrentEiditData;
			$('add_trad_head').innerHTML = '编辑商品';
			$('add_trad_title').value = data.title;

			$('add_trad_text').value = data.text;
			$('add_trad_link').value = data.link;
			//$('add_trad_shopmsg').style.display = 'none';
			$('add_trad_originalprice').value = data.oprice;
			$('add_trad_marketprice').value = data.mprice;
			$('add_trad_pic').src = data.pic;
		}
		$('add_trad_pic').style.display='block';
		$('add_trad_pic_load').style.display='none';
	},
	delTradOk: function(id,satan){
		if(this.qwindowtips){
			this.qwindowtips.hide();
		}
		var id = id||0 ,satan = satan||0;
		if(id<1)return;
		nova_request(function(res) {
			if(res.error == 1){	//删除成功
				if(!this.qwindowtips)this.qwindowtips = this._createwin();
				this.qwindowtips
					.setSize(130,60)
					.setzIndex(30030)
					.setContent("html", document.getElementById("cont41").innerHTML)
					.hideHandle()
					.hideMask()
					.show();
				setTimeout(function(){
					this.qwindowtips.hide();
				}.bind(this), 3000);
				this._showHistory();
				//this.reflashTradList(0);
			}else{
				if(res.error == -999){ //有绑定
					if(!this.qwindowtips)this.qwindowtips = this._createwin();
					var tipsContent = '<div class="goods_tips">\
						<div class="tips_title"><span class="ico__fail"><em>提示</em></span>您确定要删除此商品么？</div>\
						<div class="tips_content"><p>该商品目前已经在'+ res.total +'个视频中被推广，删除该商品后它将不会在这些视频中出现</p></div>\
						<div class="tips_action"><div onclick="actnote_mg.delTradOk(' + id + ',1)" class="form_btn form_btn_s form_btnmaj_s"><span class="form_btn_text">确  定</span></div><div onclick="actnote_mg.qwindowtips.hide()" class="form_btn form_btn_s form_btnsub_s"><span class="form_btn_text">取  消</span></div></div>\
					</div>';
					this.qwindowtips
						.setSize(300,200)
						.setzIndex(30030)
						.setContent("html", tipsContent)
						.showHandle()
						.show();
					this.qwindowtips.showMask();
				}else{	//删除失败
					if(!this.qwindowtips)this.qwindowtips = this._createwin();
					var tipsContent = '<div class="manager_tips">\
						<div class="tips_title">删除失败，请稍后重试</div>\
						<div class="tips_action"><div class="form_btn form_btn_s form_btnmaj_s" onclick="actnote_mg.qwindowtips.hide()"><span class="form_btn_text">知道了</span></div></div>\
						</div>';
					this.qwindowtips
						.setSize(240,110)
						.setzIndex(30030)
						.setContent("html", tipsContent)
						.hideHandle()
						.hideMask()
						.show();
					setTimeout(function(){
						this.qwindowtips.hide();
					}.bind(this), 3000);
				}
			}
		}.bind(this), '/u/videos/tradsave', {'act':3,'id':id,'satan':satan}, 'post');

	},
	delTrad: function(o,id){
		var id = id||0;
		if(id<1)return;
		if(!this.qwindowtips)this.qwindowtips = this._createwin();
		var tipsContent = '<div class="goods_tips">\
			<div class="tips_title"><span class="ico__fail"><em>提示</em></span>您确定要删除此商品么？</div>\
			<div class="tips_content"></div>\
			<div class="tips_action"><div onclick="actnote_mg.delTradOk(' + id + ')" class="form_btn form_btn_s form_btnmaj_s"><span class="form_btn_text">确  定</span></div><div onclick="actnote_mg.qwindowtips.hide()" class="form_btn form_btn_s form_btnsub_s"><span class="form_btn_text">取  消</span></div></div>\
		</div>';
		this.qwindowtips
			.setSize(240,130)
			.setzIndex(30030)
			.setContent("html", tipsContent)
			.showHandle()
			.show();
		this.qwindowtips.showMask();
	},
	// 上传商品图片
	loadswfu : function() {
		if(typeof(SWFUpload) == 'undefined') {
			return YKUC.loadScript(ucloader.swfujs, this.loadswfu.bind(this));
		}
		var err_queue = function (file, errCode, message) {
			var msg;
			switch(errCode) {
				case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
					msg = '文件过大';
					break;
				case SWFUpload.QUEUE_ERROR.INVALID_FILETYPE:
					msg = '请选择图片文件';
					break;
				case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
					msg = '不能识别的文件';
					break;
				default:
					return;
					break;
			}
			$('add_trad_pic').style.display='block';
			$('add_trad_pic_load').style.display='none';
			mg._alertTrad({"eleid":"bgImgPHEle","errpos":"bgImgPHEle","eclick":"bgImgPHEle","efocus":"bgImgPHEle","msg":msg});return;
		}.bind(this);
		var chk_upimg = function() {
			$('add_trad_pic').style.display='none';
			$('add_trad_pic_load').style.display='block';
			$('bgImgPHEle').removeClassName('form_input_error');
			$('input_error_trad').style.display = 'none';
			return true;
		}.bind(this);
		var err_upload = function() {
			$('add_trad_pic').style.display='none';
			$('add_trad_pic_load').style.display='block';
		}
		var success_upload = function(file, ret) {
			$('add_trad_pic').style.display='block';
			$('add_trad_pic_load').style.display='none';
			if(!ret) return;
			ret = typeof ret == 'object' ? ret : ret.stripScripts().evalJSON(1);
			if(!('error' in ret)) return;
			if(ret.error > 0) {
				if(ret.src) {
					setTimeout(function() {
						$('add_trad_pic').src = ret.src;
					}.bind(this), 100);
				}
			} else {
				mg._alertTrad({"eleid":"bgImgPHEle","errpos":"bgImgPHEle","eclick":"bgImgPHEle","efocus":"bgImgPHEle","msg":ret.zh});return;
			}
			return true;
		}.bind(this);
		var settings = {
			upload_url: 'http://'+location.host+'/u/videos/uploadPic/',
			flash_url: ucloader.swfu,
			file_post_name: 'bg',
			post_params: ucloader.sess,

			file_upload_limit : 0,
			file_queue_limit : 1,
			file_size_limit : "300", // 300K
			file_types : "*.jpg;*.gif;*.jpeg;*.png", // or you could use something like: "*.doc;*.wpd;*.pdf",
			file_types_description : "All Image Files.",

			debug: false,
			prevent_swf_caching : true,
			button_placeholder_id: 'bgImgPH',
			button_width: '60',
			button_height: '30',
			button_window_mode : SWFUpload.WINDOW_MODE.TRANSPARENT,
			button_cursor : SWFUpload.CURSOR.HAND,
			button_action : SWFUpload.BUTTON_ACTION.SELECT_FILE,

			file_queue_error_handler: err_queue,
			upload_start_handler: chk_upimg,
			file_dialog_complete_handler: function(sel_num, queue_num){
				if(sel_num > 0) this.startUpload();
			},
			upload_error_handler : err_upload,
			upload_success_handler : success_upload
		};
		this.swfu = new SWFUpload(settings);
	},
	selectTradOk: function(){
		var tradlists = $('tradlist').select('li')
			,selectLi,isfindOut = false;
		tradlists.each(function(o){
			if(isfindOut == false){
				var inputEle = $(o).down('input');
				if(inputEle.checked == true){
					selectLi = o;
					isfindOut = true;
				}
			}
		}.bind(this));
		if(isfindOut){
			var dataString = selectLi.readAttribute('tdata')
				,data = (decodeURIComponent(dataString)).evalJSON(1);
			$('noteedit_saleadd').style.display = 'none';
			$('noteedit_saleedit').style.display = 'block';
			$('noteedit_saleshowtitle').innerHTML = data.title;
			this.qwindowTrad.hide();
			this.tradCurrentData = data;
			//this.noteCurrent.writeAttribute('tdata',dataString);
		}else{
			alert('请选择商品！');
		}
	},
	selectTradCancel: function(){
		//取消选择商品
		this.qwindowTrad.hide();
	},
	editTradOk: function(){
		var title,text,link,mpriceTemp,mprice,opriceTemp,oprice,pic,id=0,act=1,hasShop=0;
		hasShop = $('add_trad_shopmsg').readAttribute('_hasshop');
		if(hasShop != 1){
			mg._alertTrad({"eleid":"add_trad_link","errpos":$("add_trad_link").up(2),"eclick":"add_trad_link","efocus":"add_trad_link","msg":"您尚未绑定店铺，无法添加商品，请先绑定店铺后刷新页面重试"});return;
		}
		title = trim($('add_trad_title').value);
		text = trim($('add_trad_text').value);
		link = trim($('add_trad_link').value);
		mpriceTemp = $('add_trad_marketprice').value;
		opriceTemp = $('add_trad_originalprice').value;
		mprice = parseFloat(mpriceTemp);
		oprice = parseFloat(opriceTemp);
		pic = $('add_trad_pic').src;

		if(title.length == 0){
			mg._alertTrad({"eleid":"add_trad_title","errpos":$("add_trad_title").up(2),"eclick":"add_trad_title","efocus":"add_trad_title","msg":"商品名称不能为空，请输入内容"});return;
		}
		if(title.length > 20){
			mg._alertTrad({"eleid":"add_trad_title","errpos":$("add_trad_title").up(2),"eclick":"add_trad_title","efocus":"add_trad_title","msg":"商品名称超过20个字，请修改"});return;
		}
		if(text.length == 0){
			mg._alertTrad({"eleid":"add_trad_text","errpos":$("add_trad_text").up(2),"eclick":"add_trad_text","efocus":"add_trad_text","msg":"商品描述不能为空，请输入内容"});return;
		}
		if(text.length > 20){
			mg._alertTrad({"eleid":"add_trad_text","errpos":$("add_trad_text").up(2),"eclick":"add_trad_text","efocus":"add_trad_text","msg":"商品描述超过20个字，请修改"});return;
		}
		if(link.length == 0){
			mg._alertTrad({"eleid":"add_trad_link","errpos":$("add_trad_link").up(2),"eclick":"add_trad_link","efocus":"add_trad_link","msg":"商品链接不能为空，请输入内容"});return;
		}
		if (!link.match(/^http:\/\/[^\/]+\.(taobao|tmall|youku|tudou)\.(com|hk|tw).*/im)) {
			mg._alertTrad({"eleid":"add_trad_link","errpos":$("add_trad_link").up(2),"eclick":"add_trad_link","efocus":"add_trad_link","msg":"商品链接目前仅支持淘宝/天猫店铺商品，请修改"});return;
		}
		if(mpriceTemp.length == 0){
			mg._alertTrad({"eleid":"add_trad_marketprice","errpos":$("add_trad_marketprice").up(2),"eclick":"add_trad_marketprice","efocus":"add_trad_marketprice","msg":"价格不能为空，请输入内容"});return;
		}
		if(opriceTemp.length == 0){
			mg._alertTrad({"eleid":"add_trad_originalprice","errpos":$("add_trad_originalprice").up(2),"eclick":"add_trad_originalprice","efocus":"add_trad_originalprice","msg":"原价不能为空，请输入内容"});return;
		}
		if (isNaN(mprice) || !(mprice.toString().match(/(^\d+?$)|^\d+?\.\d{1,2}$/im))) {
			mg._alertTrad({"eleid":"add_trad_marketprice","errpos":$("add_trad_marketprice").up(2),"eclick":"add_trad_marketprice","efocus":"add_trad_marketprice","msg":"价格最多支持2位小数，请修改"});return;
		}
		if (isNaN(oprice) || !(oprice.toString().match(/(^\d+?$)|^\d+?\.\d{1,2}$/im))) {
			mg._alertTrad({"eleid":"add_trad_originalprice","errpos":$("add_trad_originalprice").up(2),"eclick":"add_trad_originalprice","efocus":"add_trad_originalprice","msg":"原价最多支持2位小数，请修改"});return;
		}
		if (!pic.match(/^http:\/\/.+/im) || pic.match(/default_avatar/im)) {
			mg._alertTrad({"eleid":"bgImgPHEle","errpos":"bgImgPHEle","eclick":"bgImgPHEle","efocus":"bgImgPHEle","msg":"图片不能为空，请上传"});return;
		}

		if(this.tradCurrentEiditData){
			id = this.tradCurrentEiditData.id;
			act	= 2;
		}

		var postdata = {'act':act,'id':id,'title':title,'text':text,'act':act,'link':link,'mprice':mprice,'oprice':oprice,'pic':pic};
		nova_request(function(res) {
			if(res.error == 1){
				if(act == 2){//编辑
					if(this.tradCurrent == 'page'){	//页面
						//this.tradCurrent.writeAttribute('tdata',encodeURIComponent(JSON.stringify(postdata)));
						this.tradCurrentData = postdata;
						$('noteedit_saleshowtitle').innerHTML = title;
						this.qwindowTradList.hide(0);
					}else{//列表
						setTimeout(function(){
							this.qwindowTradList.hide();
						}.bind(this), 100);
						this.reflashTradList(id);
					}
				}else{//增加
					setTimeout(function(){
						this.qwindowTradList.hide();
					}.bind(this), 100);
					this.reflashTradList(res.result.id);
				}
			}else{
				if(res.error == -1 && res.iError == -27){
					mg._alertTrad({"eleid":"add_trad_link","errpos":$("add_trad_link").up(2),"eclick":"add_trad_link","efocus":"add_trad_link","msg":"请输入绑定店铺下的商品地址"});return;
				}else{
					if(!this.qwindowtips)this.qwindowtips = this._createwin();
					var tipsContent = '<div class="manager_tips">\
							<div class="tips_title">保存失败，请稍后重试</div>\
							<div class="tips_action"><div class="form_btn form_btn_s form_btnmaj_s" onclick="actnote_mg.qwindowtips.hide()"><span class="form_btn_text">知道了</span></div></div>\
							</div>';
					this.qwindowtips
						.setSize(240,110)
						.setzIndex(30030)
						.setContent("html", tipsContent)
						.hideHandle()
						.hideMask()
						.show();
					setTimeout(function(){
						this.qwindowtips.hide();
					}.bind(this), 3000);
				}
			}
		}.bind(this), '/u/videos/tradsave', postdata, 'post');
	},
	reflashTradList: function(id){
		var id = id||0;
		nova_request(function(res) {
			if(res.total == 0){
				$('tradlistHd').innerHTML = '<h3>商品列表</h3>';
				$('tradlist').innerHTML = '<div class="add">\
						<a href="javascript:;" onclick="actnote_mg.editTrad(this,\'add\')">+ 添加新商品</a>\
					</div>';
				$('tradlistAction').innerHTML = '<div class="closeaction"><div onclick="actnote_mg.selectTradCancel();" class="form_btn form_btn_l form_btnsub_l"><span class="form_btn_text">关  闭</span></div></div>';
			}else if(res.total >= this.tradLength){
				$('tradlistHd').innerHTML = '<h3>商品列表</h3><span class="goodnum"> (<span class="max">' + this.tradLength + '</span>/' + this.tradLength + ')</span><span class="addtip">您最多可以添加' + this.tradLength + '个商品</span>';
				$('tradlist').innerHTML = res.content;
				$('tradlistAction').innerHTML = '<div class="addaction">\
						<div class="form_btn form_btn_l form_btnmaj_l"><span class="form_btn_text" onclick="actnote_mg.selectTradOk();">提  交</span></div>\
						<div class="form_btn form_btn_l form_btnsub_l"><span class="form_btn_text" onclick="actnote_mg.selectTradCancel();">取&#12288;消</span></div>\
					</div>';
			}else{
				$('tradlistHd').innerHTML = '<h3>商品列表</h3><span class="goodnum"> (' + res.total + '/' + this.tradLength + ')</span><a class="addnew" href="javascript:;" onclick="actnote_mg.editTrad(this,\'add\')">+ 添加新商品</a>';
				$('tradlist').innerHTML = res.content;
				$('tradlistAction').innerHTML = '<div class="addaction">\
						<div class="form_btn form_btn_l form_btnmaj_l"><span class="form_btn_text" onclick="actnote_mg.selectTradOk();">提  交</span></div>\
						<div class="form_btn form_btn_l form_btnsub_l"><span class="form_btn_text" onclick="actnote_mg.selectTradCancel();">取&#12288;消</span></div>\
					</div>';
			}
			$('tradlist').select('li').each(function(o){
				var oInput = o.down('input');
				if(id == oInput.value){
					o.addClassName('current');
					oInput.checked = true;
				}else{
					o.removeClassName('current');
					oInput.checked = false;
				}

				o.onclick = function(event){
					var currentInput = o.down('input'),source = Element.extend(Event.element(event));
					if(source.nodeName.toLowerCase() == 'a')return;
					if(source.up('a'))return;
					$('tradlist').select('li').each(function(oo){
						oo.removeClassName('current');
					});
					o.addClassName('current');
					if(source.nodeName.toLowerCase() == 'input'){
						if(currentInput.checked == true){
							o.addClassName('current');
						}else{
							o.removeClassName('current');
						}
					}else{
						if(currentInput.checked == true){
							currentInput.checked = false;
							o.removeClassName('current');
						}else{
							currentInput.checked = true;
							o.addClassName('current');
						}
					}
				};
			});
		}.bind(this), '/u/videos/gettradlist', {}, 'get');
	},
	editTradCancel: function(){
		this.qwindowTradList.hide();
	},
	memberJoin: function(o){
		if(!this.qwindow)this.qwindow = this._createwin();
		this.qwindow
			.setSize(260,105)
			.setContent("html", document.getElementById("cont_memberJoin").innerHTML)
			.showHandle()
			.show();
		this.qwindow.showMask();
		//this.qwindow.setSize(240,105);
		//$(this.qwindow.dom.winbody).down('.tips_title').innerHTML = '<span class="ico__fail"><em>提示</em></span>您确定要删除此注释么？';
	},
	escapeAclick: function(){
		this.escapeIEAclick = 1;
		setTimeout(function(){
			this.escapeIEAclick = null;
		}.bind(this), 100);
	},
	menu_linkgood: function(){
		var menu_linkgood=$('menu_linkgood'),linkgood_textarea = $('linkgood_textarea'),linkgood_action=$('linkgood_action'),linkgood_error=$('linkgood_error'),initText='请输入商品链接';
		menu_linkgood.click();
		linkgood_textarea.onfocus = function(){
			if(trim(linkgood_textarea.value) == initText){
				linkgood_textarea.value = '';
			}
			linkgood_textarea.removeClassName('error');
			linkgood_error.style.display = 'none';
		};
		linkgood_textarea.onblur =function(){
			if(trim(linkgood_textarea.value) == ''){
				linkgood_textarea.value = initText;
			}
		};
		linkgood_textarea.onclick = function(){
			linkgood_textarea.removeClassName('error');
		};
		linkgood_action.onclick = function(){
			var actionFunError = function(etype){
				var etype = etype || 0;
				var errText = '';
				linkgood_textarea.addClassName('error');
				linkgood_error.style.display = 'block';
				switch(etype){
					case 1:
						errText ='请输入链接';
						break;
					case 2:
						errText ='抱歉，目前仅支持添加天猫/淘宝的商品';
						break;
					case 3:
						errText ="该商品未开通淘宝客推广，请<a href=\"javascript:;\" onclick=\"$('menu_commgood').click();\">选择其他商品</a>或联系卖家开通淘宝客推广";
						break;
					default :
						errText ='操作失败';
						break;
				}
				linkgood_error.down('p').innerHTML = errText;
			};
			var actionPost = function(link){
				nova_request(function(res) {
					res = typeof res == 'object' ? res : res.stripScripts().evalJSON(true);
					switch(res.error){
						case 1:
							this.editTradInit(res);
							break;
						case -1:
							actionFunError(2);
							break;
						case -2:
							actionFunError(3);
							break;
						default :
							eactionFunError(0);
							break;
					}
					return;
				}.bind(this), '/u/videos/gettradinfo', {"link":link}, 'post');
			};
			if(trim(linkgood_textarea.value) == ''||trim(linkgood_textarea.value) == initText){
				actionFunError(1);
			}else{
				actionPost(linkgood_textarea.value);
			}
			return;
		};
	},
	editTradInit: function(res){
		if(!res){
			var d = new Date();
			var dd =d.getFullYear() + '-' + d.getMonth() +'-'+ d.getDate() +' '+ d.getHours() +':'+ d.getMinutes() +':'+ d.getSeconds();
			var title = 'title_'+dd;
			res = {'pps_title':title,'pps_summary':'summary','pps_ccost':10,'pps_cost':15,'pps_commission':3,'pps_rim_source':1,'pps_category_name':'category_name','pps_link':'http://detail.tmall.com/item.htm?spm=0.0.0.0.6LIshu&id=40409541628&scene=taobao_shop&rn=&gccpm=1014178.102.2.subject-0.39010','pps_icon_small':'http://r3.ykimg.com/05100000551919026737B33CFC024824'};
		}
		res.pps_rim_source = parseInt(res.pps_rim_source,10);
		if(actnote_mg.qwindowTrad)
			actnote_mg.qwindowTrad.hide();
		$('noteedit_saleadd').show();
		$('noteedit_saleedit').show();
		actnote_mg.tradCurrentData = res;

		$('noteedit_saleedit_title').value = res.pps_title;
		if(res.pps_desc)
		{
			$('noteedit_saleedit_summary').value = res.pps_desc;
		}else{
			$('noteedit_saleedit_summary').value = '';
		}

		//$('noteedit_saleedit_detail').innerHTML = this._saleedit_detail_format(res,1);
		$('noteedit_saleedit_detail').innerHTML = actnote_mg._saleedit_detail_format(res,1);
		$('add_trad_pic').src = res.pps_icon_small;
		$('input_error').style.display = 'none';
		$('noteedit').select('.form_input_error').each(function(o){
			o.removeClassName('form_input_error');
		}.bind(this));
	},
	_saleedit_detail_format: function(res,type){
		var s;
		var rim_source;
		var type = type || 0
		switch(res.pps_rim_source){
			case 3:
				rim_source = '牛铺';
				break;
			case 2:
				rim_source = '天猫商城';
				break;
			case 1:
				rim_source = '淘宝市集';
				break;
			case 4:
				rim_source = '优酷商城';
				break;
			case 5:
				rim_source = '中国好买手';
				break;
			case 6:
				rim_source = '丽子美妆';
				break;
			case 7:
				rim_source = '顺丰海淘';
				break;
			case 11:
				rim_source = '优酷游戏PC';
				break;
			case 12:
				rim_source = '优酷游戏应用商城';
				break;
			case 13:
				rim_source = '营销活动专题页';
				break;
			case 8:
				rim_source = '表现主义';
				break;
			default:
				rim_source = '其他';
				break;
		}
		if(type == 0){
			s = '<li><span>售价：</span><span>¥'+this.money_format(res.pps_ccost)+'</span></li>\
				 <li><span>原价：</span><span>¥'+this.money_format(res.pps_cost)+'</span></li>\
				<li><span>商城：</span><span>'+rim_source+'</span></li>';
		}else{
			s = '<li><span>售价(¥)：</span><span><input id="in_pps_ccost" name="pps_ccost" value="'+this.money_format(res.pps_ccost)+'" style="width:60px;"></span></li>\
				 <li><span>原价(¥)：</span><span><input id="in_pps_cost" name="pps_cost" value="'+this.money_format(res.pps_cost)+'" style="width:60px;"></span></li>\
				<li><span>商城：</span><span>'+rim_source+'</span></li>';
		}
		return s;
	},
	money_format: function(amount){
		var i = parseFloat(amount);
		if(isNaN(i)) { i = 0.00; }
		var minus = '';
		if(i < 0) { minus = '-'; }
		i = Math.abs(i);
		i = parseInt((i + .005) * 100);
		i = i / 100;
		s = new String(i);
		if(s.indexOf('.') < 0) { s += '.00'; }
		if(s.indexOf('.') == (s.length - 2)) { s += '0'; }
		s = minus + s;
		return s;
	},
	editTradGuide: function(){
		//新手引导
		var Guide = function(contents,sizes){
			var gWindow = new Qwindow({
				//'zindex': 2000,
				'showmask': true,
				'showhandle':false,
				onshow:function(){
					var win = gWindow.getElements().win;
					var top = win.offsetTop;
					if(top<0){
						gWindow.setPos(10);
					}
				}
			});

			//改写样式
			var wEles = gWindow.getElements();
			$(wEles.winhead).remove();
			$(wEles.winbg).remove();
			wEles.winbody.style.background = 'none';
			wEles.winbox.style.border = 'none';

			gWindow.trigger = function(inx){
				var size = sizes[inx];
				var con = contents[inx];
				gWindow.setSize(size.width,size.height).setContent("element",con).show();
			}
			return  gWindow;
		}

		var contents = $$('.guide');
		var guide = Guide(contents,[{width:840,height:320},{width:840,height:700},{width:840,height:700},{width:840,height:740},{width:920,height:740}]);
		Event.observe($('guide1'), 'click', function(){
			Nova.Cookie.set('bkbmadd',1, 365, '/', window.location.host);
			guide.hide();
			actnote_mg.annotate_add(6);
		});
		Event.observe($('guide2'), 'click', function(){
			guide.trigger(2);
		});
		Event.observe($('guide3'), 'click', function(){
			guide.trigger(3);
		});
		Event.observe($('guide4'), 'click', function(){
			guide.trigger(4);
		});
		$$('.gotoAddNow').each(function(o,index){
			Event.observe(o, 'click', function(){
				this.annotate_add_guide('go');
			}.bind(this));
		}.bind(this));
		this._editTradGuide = guide;
	},
	annotate_add_guide: function(type){
		var notesList6 = $('timeline').select('[_ntype="6"]');
		if(notesList6.length >= 3){
			if(!this.qwindow)this.qwindow = this._createwin();
			this.qwindow
				.setSize(436,110)
				.setContent("html", document.getElementById("cont51").innerHTML)
				.hideHandle()
				.hideMask()
				.show();
			$(this.qwindow.dom.winbody).down('.tips_title').innerHTML = '为了保证观看体验，每个视频最多只能设置三个边看边买商品哦';
			this._timeoutWindow = this.qwindow;
			delete this.qwindow;
			return;
		}
		if(type == 'go'){
			Nova.Cookie.set('bkbmselect',1, 365, '/', window.location.host);
			this._editTradGuide.hide();
			if(this.selectTradActionType == 'link'){
				this.selectTrad('link');
			}else{
				this.selectTrad();
			}
		}else{
			if(Nova.Cookie.get('bkbmadd') == 1){
				this.annotate_add(6);
			}else{
				this._editTradGuide.trigger(0);
			}
		}
	}
}
var swfu = null;
var actUpload = {
	loadswfu : function() {
		if(typeof(SWFUpload) == 'undefined') {
			return YKUC.loadScript(ucloader.swfujs, this.loadswfu.bind(this));
		}
	},
	init : function (){
		this.loadswfu();
		var settings_object = {
			upload_url: 'http://'+location.host+'/u/videos/uploadPic/',
			flash_url: ucloader.swfu,
			flash9_url: ucloader.swfup9,
			file_post_name: 'banner',
			post_params: ucloader.sess,

			file_upload_limit : 0,
			file_queue_limit : 1,
			file_size_limit : "2048", // 2MB
			file_types : "*.jpg;*.gif;*.jpeg;*.png", // or you could use something like: "*.doc;*.wpd;*.pdf",
			file_types_description : "All Image Files.",

			button_placeholder_id : 'bgImgPH',
			button_width : '100%',
			button_height : '100%',
			button_action : SWFUpload.BUTTON_ACTION.SELECT_FILES,
			button_disabled : false,
			button_cursor : SWFUpload.CURSOR.HAND,
			button_window_mode : SWFUpload.WINDOW_MODE.TRANSPARENT,
			debug: true,

			file_dialog_complete_handler: this.complete || null,
			file_queue_error_handler: this.error || null,
			file_queued_handler: this.queued || null,
			upload_start_handler: this.start || null,
			upload_error_handler : this.error || null,
			upload_success_handler : this.success || null,
			upload_complete_handler: this.upcomp || null,
			upload_progress_handler: this.progress || null
		};
		swfu = new SWFUpload(settings_object);
	},
	complete : function () {
		swfu.startUpload();
	},
	beforSelect : function () {
		console.log('beforSelect');
	},
	beforSuccess : function () {
		console.log('beforSuccess');
	},
	error : function (){
		console.log('error');
	},
	queued : function () {
		console.log('queued');
	},
	start : function () {
		console.log('start');
	},
	upcomp : function () {
		console.log('upcomp');
	},
	progress : function (){
		console.log('progress');
	}
}
var main = {
	hideNotice : function(ele){
		var ele = $(ele);
		ele.animate({'opacity':0},1000,function(){
			ele.remove();
		});
	}
}
function onPlayerStart(){
	mg._screenshot_able('ok');
}
function onPlayerComplete(){
	mg._screenshot_able('no');
}
function ready_init_mg() {
	mg.init();
	actnote_mg.init();
	//actUpload.init();
}

function validatePrivacySetting(){
	var maxLength = 22;
	if(jQuery('[data-js=privacyForm]').is(':checked')){
		var hasError = false;


		var promptTextField =jQuery('[data-js=privacySubFromPrompt]');
		var endTimeField = jQuery('[data-js=privacySubFromTime]');
		var endTime=jQuery.trim(endTimeField.val());
		var promptText=jQuery.trim(promptTextField.val());
		var endTimeRgex = /^([0-9]{1,3}):([0-5][0-9])$/;
		endTimeField.parent().removeClass('manage__error');
		endTimeField.parent().find('[data-js=errorField]').text('');
		promptTextField.parent().removeClass('manage__error');

		if(!promptText || !promptText.length || promptText===''){
			var textCount = 0;
			jQuery('[data-js=privacyPromptCount]').text(maxLength - textCount);
			promptTextField.parent().addClass('manage__error');
			hasError = true;
		}else{
			if(promptText.length > 22){
				jQuery('[data-js=privacyPromptCount]').text(maxLength - promptText.length);
				promptTextField.parent().addClass('manage__error');
				hasError = true;
			}else{
				jQuery('[data-js=privacyPromptCount]').text(maxLength - promptText.length);
				promptTextField.parent().removeClass('manage__error');
			}
		}
		if(!endTimeField.is(':disabled') && !endTimeRgex.test(endTime)){
			endTimeField.parent().addClass('manage__error');
			endTimeField.parent().find('[data-js=errorField]').text('请输入正确的时间格式，如01:30 (1分30秒)');
			hasError = true;
		}else{
			endTimeField.parent().removeClass('manage__error');
		}

		if(hasError){
			return false;
		}
		
	}
	return true;
};

ready_init_mg.defer();
