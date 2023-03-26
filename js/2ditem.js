var fileeditmove = document.getElementById('fileeditmove')
var itemedit_button = document.getElementById('itemeditbutton')
var mubanedit_button = document.getElementById('mubaneditbutton')

function edit(num) {
	if (num == 1) {
		fileeditmove.style.transform = "translateX(-50%)"
		itemedit_button.style.fontSize = "16px"
		mubanedit_button.style.fontSize = "28px"
		mubanedit_button.style.backgroundColor = "rgba(255, 255, 255, 0.8)"
		itemedit_button.style.backgroundColor = "rgba(255, 255, 255, 0.3)"
	}
	if (num == 2) {
		fileeditmove.style.transform = "translateX(0%)"

		itemedit_button.style.fontSize = "28px"
		mubanedit_button.style.fontSize = "16px"
		mubanedit_button.style.backgroundColor = "rgba(255, 255, 255, 0.3)"
		itemedit_button.style.backgroundColor = "rgba(255, 255, 255, 0.8)"
	}
}

function out(num) {



	if (num == 1) {
		run.style.transform = "translateY(-90%) translateX(-110%)"
		run.style.width = "70%"
		run.style.height = "90%"
		run.style.borderRadius = "20px"
		run2.style.display = "block"
	}


	if (num == 2) {
		run.style.transform = "translateY(-90%) translateX(-110%)"
		run.style.width = "70%"
		run.style.height = "90%"
		run.style.borderRadius = "20px"
		run2.style.display = "block"
		var zt = 0

		var value_filename = ""
		var value_iaid = ""
		var value_itemname = ""
		var value_item = ""
		var value_textures = ""
		var value_prem = ""

		var inputs = document.getElementById('list').getElementsByTagName('input');
		// 用来存储元素值
		var result = "";
		// 遍历input
		for (var i = 0; i < inputs.length; i++) {
			zt++
			// 获取元素值
			var value = inputs[i].value;
			// 进行处理
			// 将处理结果存储
			if (zt == 1) {
				value_filename = value
			}
			if (zt == 2) {
				value_iaid = value
			}
			if (zt == 3) {
				value_itemname = value
			}
			if (zt == 4) {
				value_item = value
			}
			if (zt == 5) {
				value_textures = value
			}
			if (zt == 6) {
				value_prem = value




			}
			
			if (zt == 7) {
				result += "  " + value_iaid + ":" + "\n"
				result += "    display_name: '" + value_itemname + "'" + "\n"
				result += "    permission: " + value_prem + "\n"
				result += "    resource:" + "\n"
				result += "      generate: true" + "\n"
				result += "      material: " + value_item + "\n"
				result += "      textures: \n"
				result += "      - " + value_textures + value_filename + "\n" + "\n"
				zt = 0
			zt = 0
}
		}
		// 将处理结果放入textarea
		document.getElementById('out3').value = result;
	}


	if (num == 3) {
		var zt = 0

		var value_filename = ""
		var value_iaid = ""
		var value_itemname = ""
		var value_item = ""
		var value_textures = ""
		var value_prem = ""

		var inputs = document.getElementById('list').getElementsByTagName('input');
		// 用来存储元素值
		var result = "";
		// 遍历input
		for (var i = 0; i < inputs.length; i++) {
			zt++
			// 获取元素值
			var value = inputs[i].value;
			// 进行处理
			// 将处理结果存储
			if (zt == 1) {
				value_filename = value
			}
			if (zt == 2) {
				value_iaid = value
				
			}
			if (zt == 3) {
				value_itemname = value
			}
			if (zt == 4) {
				value_item = value
			}
			if (zt == 5) {
				value_textures = value
			}
			if (zt == 6) {
				value_prem = value


			}
			if (zt == 6) {
				value_prem = value
			}
			if (zt == 7) {
			parameter = document.getElementById("out_parameter").value;
			result += "      - " + parameter + ":" + value_iaid + "\n"
			zt = 0
}
console.log(value);
		}
		// 将处理结果放入textarea
		document.getElementById('out3').value = result;
	}








	if (num == 5) {
		run.style.transform = "translateY(0%) translateX(0%)"
		run.style.width = "80px"
		run.style.height = "80px"
		run.style.borderRadius = "50px"
		run2.style.display = "none"
	}

	if (num == 4) {
		var keywords = document.getElementById('out_parameter').value; //获取input中的关键词
		keywords = keywords.split('|'); //以|分割关键词
		var out = document.getElementById('out3').value; //获取textarea的的内容
		var array = out.split('\n').filter(function(e) {
			return e
		}); //以换行符分割textarea中的内容，并剔除空行
		var newArray = [];
		var c;
		for (var i = 0; i < array.length; i++) {
			c = true;
			for (var j = 0; j < keywords.length; j++) {
				if (array[i].indexOf(keywords[j]) !== -1) {
					c = false;
				}
			}
			if (c) {
				newArray.push(array[i].replace(/:$/, '')); //将以:结尾的字符串替换为“”
			}
		}
		document.getElementById('out3').value = '      - ' + newArray.join('\n      - '); //每行前面加上ABC:

	}












	if (num == 8) {
		var zt = 0

		var value_filename = ""
		var value_iaid = ""
		var value_itemname = ""
		var value_item = ""
		var value_textures = ""
		var value_prem = ""
		var value_efilename = ""

		var inputs = document.getElementById('list').getElementsByTagName('input');
		// 用来存储元素值
		var result = "";
		// 遍历input
		for (var i = 0; i < inputs.length; i++) {
			zt++
			// 获取元素值
			var value = inputs[i].value;

			// 进行处理
			// 将处理结果存储
			if (zt == 1) {
				value_filename = value
			}
			if (zt == 2) {
				value_iaid = value
			}
			if (zt == 3) {
				value_itemname = value
			}
			if (zt == 4) {
				value_item = value
			}
			if (zt == 5) {
				value_textures = value
			}
			if (zt == 7) {
				value_efilename = value


				result += "ren '" + value_efilename + "' '" + value_filename + ".png' " + "\n"
				zt = 0


			}


		}
		// 将处理结果放入textarea
		document.getElementById('out3').value = "";
		document.getElementById('out3').value +=
			"#使用方法:\n#1.在文件目录下创建 name.bat\n#2.将下方代码复制上去，然后运行name.bat\n#请做好备份，改名不可撤回\n\n";
		document.getElementById('out3').value += result;
	}














}
edit(2)


/**
 * 
 */
var i = 0;
var j = 0;

var muban_name = "";
var muban_name2 = "";
var muban_file = "";
var muban_item = "";
var muban_prem = "";
var muban_iaid = "";
var muban_name_hz = "";
var muban_name2_hz = "";
var muban_iaid_hz = "";
var muban_prem_hz = "";

function tj() {
	muban_name = document.getElementById("muban_edit_name").value;
	muban_name2 = document.getElementById("muban_edit_name2").value;
	muban_name2 = document.getElementById("muban_edit_iaid").value;
	muban_file = document.getElementById("muban_edit_file").value;
	muban_item = document.getElementById("muban_edit_item").value;
	muban_prem = document.getElementById("muban_edit_prem").value;
	muban_name_hz = document.getElementById("muban_edit_name_hz").checked;
	muban_name2_hz = document.getElementById("muban_edit_name2_hz").checked;
	muban_iaid_hz = document.getElementById("muban_edit_iaid_hz").checked;
	muban_prem_hz = document.getElementById("muban_edit_prem_hz").checked;
	muban_name_num = document.getElementById("muban_edit_name_num").value;
	muban_name2_num = document.getElementById("muban_edit_name2_num").value;
	muban_iaid_num = document.getElementById("muban_edit_iaid_num").value;
}

var dfileName = ""
$(function() {
	
	$("#fileMutiply").change(function eventStart() {
		var ss = this.files; //获取当前选择的文件对象
		for (var m = 0; m < ss.length; m++) { //循环添加进度条
			efileName = ss[m].name;
muban_item = "";
			if (muban_name_hz === true) {
				dfileName = document.getElementById("muban_edit_name").value;
				muban_name_num++
				muban_name = dfileName + "_" + muban_name_num
			}

			if (muban_name2_hz === true) {
				dfileName = document.getElementById("muban_edit_name2").value;
				muban_name2_num++
				muban_name2 = dfileName + "_" + muban_name2_num
				console.log("name");
			} else {
				muban_name2 = document.getElementById("muban_edit_name2").value;
			}

			if (muban_iaid_hz === true) {
				muban_iaid = document.getElementById("muban_edit_iaid").value;
				muban_iaid_num++
				muban_iaid = muban_iaid + "_" + muban_iaid_num
			} else {
				muban_iaid = muban_name2


			}
			if (muban_prem_hz === true) {
				muban_prem = document.getElementById("muban_edit_prem").value;
				muban_prem = muban_prem + "_" + muban_name2
			}

			if (muban_name === "") {
				dfileName = ss[m].name
			} else {
				dfileName = muban_name
			}
			
			if (muban_iaid === "") {
				muban_iaid = ss[m].name.replace(/\.png$/, "")
			} else {
				muban_iaid = muban_iaid
			}
			
			if (muban_name2 === "") {
				muban_name2 = ss[m].name.replace(/\.png$/, "")
			} else {
				muban_name2 = muban_name2
			}
			
			if (muban_edit_item.value === "") {
				const items = ["bow", "wooden_pickaxe", "stone_pickaxe", "iron_pickaxe", "golden_pickaxe", "diamond_pickaxe", "wooden_axe", "stone_axe", "iron_axe", "golden_axe", "diamond_axe", "wooden_shovel", "stone_shovel", "iron_shovel", "golden_shovel", "diamond_shovel", "wooden_hoe", "stone_hoe", "iron_hoe", "golden_hoe", "diamond_hoe", "fishing_rod","apple", "cooked_beef", "cooked_chicken", "cooked_cod", "cooked_porkchop", "cooked_salmon", "cookie", "bread", "carrot", "chorus_fruit", "cooked_mutton", "honey_bottle", "melon_slice", "mushroom_stew", "potato", "pumpkin_pie", "rabbit_stew", "beetroot_soup","diamond", "iron_ingot", "gold_ingot", "stick", "enchanting_table", "book", "leather", "paper", "sugar_cane", "bone_meal", "charcoal", "coal", "obsidian", "redstone", "glowstone_dust", "emerald", "netherite_ingot", "blaze_rod", "prismarine_shard", "ender_pearl", "quartz", "shulker_shell","netherite_ingot", "netherite_block", "netherite_axe", "netherite_pickaxe", "netherite_shovel", "netherite_sword", "netherite_helmet", "netherite_chestplate", "netherite_leggings", "netherite_boots","netherite_hoe"];
				if (items.some(item => efileName.includes(item))) {
				  const matchingItem = items.find(item => efileName.includes(item));
				  muban_item = matchingItem;
				
				}
			} else {
				muban_item = muban_edit_item.value
				console.log("有");
			}
			
			
			if (ss[m].size > 1024 * 1024) {
				sfileSize = (Math.round(ss[m].size / (1024 * 1024))).toString() + 'MB';
			} else {
				sfileSize = (Math.round(ss[m].size / 1024)).toString() + 'KB';
			}
			$("#list").append(
				"<tr><td><span class='ename'>" + efileName + "</span><br>文件改名 <input value='" +
				dfileName +
				"'> &emsp;&emsp;&emsp;IAID&emsp;&emsp;&emsp; <input value='" + muban_iaid +
				"'> <br>物品名称 <input value='" + muban_name2 +
				"'>  &emsp;&emsp;&emsp;物品原型 <input value='" + muban_item +
				"'> <br>文件路径 <input value='" + muban_file +
				"'> &emsp;&emsp;&emsp;物品权限 <input value='" + muban_prem +
				"'> </td><td style='text-align: center;'>x<input class='efn' value='" + efileName +
				"'></td></tr>");
		}
		sendAjax();

		function sendAjax() {
			if (j >= ss.length) //采用递归的方式循环发送ajax请求
			{
				$("#fileMutiply").val("");
				j = 0;
				return;
			}
			var formData = new FormData();
			formData.append('files', ss[j]); //将该file对象添加到formData对象中
			$.ajax({
				url: 'fileUpLoad.action',
				type: 'POST',
				cache: false,
				data: {},
				data: formData,
				processData: false,
				contentType: false,
				/*  beforeSend:beforeSend,//发送请求
	            complete:complete,//请求完成
	    */
				xhr: function() { //监听用于上传显示进度
					var xhr = $.ajaxSettings.xhr();
					if (onprogress && xhr.upload) {
						xhr.upload.addEventListener("progress", onprogress, false);
						return xhr;
					}
				},
			});
		}
	})
})
