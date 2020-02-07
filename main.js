/* jshint curly:true, debug:true */
/* globals $, firebase */


//映画館画像を設定していないデフォルト画像
const defaultMinitheaterImageURL = 'images/icon.png';

//初期映画一覧名
const defaultTheaterName = 'default';

//現在表示している映画一覧名
let currentMinitheaterList = null;

//Firebaseから取得したデータを一時保存しておくための変数
let dbdata = {};

/**
 * -------------------
 * 映画館一覧画面関連の関数
 * -------------------
 */

//カバー画像のカルーセル
$('.slider').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
});

//地図１〜９
//map付きモーダルを表示させる

//minitheater-item__map-wrapper1
$(document).on("click", ".minitheater-item__map-wrapper1", function() {
  var edit_map;

  // modal表示
  $('#map-modal').modal('show');

  var latlng = new google.maps.LatLng(35.662837, 139.694832)
  var mapOptions = {
    zoom: 15,
    center: latlng
  };

  //ピン表示
  var icon = new google.maps.MarkerImage('images/pin.png',
    new google.maps.Size(32, 32), //アイコンサイズ設定
    new google.maps.Point(0, 0) //アイコン位置調整
  );

  var map = new google.maps.Map(document.getElementById('map1'), mapOptions);

  var marker = new google.maps.Marker({
    position: latlng,
    map: map,
    icon: icon
  });
});

//minitheater-item__map-wrapper2
$(document).on("click", ".minitheater-item__map-wrapper2", function() {
  var edit_map;

  // modal表示
  $('#map-modal').modal('show');

  var latlng = new google.maps.LatLng(35.703646, 139.577983)
  var mapOptions = {
    zoom: 15,
    center: latlng
  };

  //ピン表示
  var icon = new google.maps.MarkerImage('images/pin.png',
    new google.maps.Size(32, 32), //アイコンサイズ設定
    new google.maps.Point(0, 0) //アイコン位置調整
  );

  var map = new google.maps.Map(document.getElementById('map1'), mapOptions);

  var marker = new google.maps.Marker({
    position: latlng,
    map: map,
    icon: icon
  });
});
//minitheater-item__map-wrapper3
$(document).on("click", ".minitheater-item__map-wrapper3", function() {
  var edit_map;

  // modal表示
  $('#map-modal').modal('show');

  var latlng = new google.maps.LatLng(35.642511, 139.714707)
  var mapOptions = {
    zoom: 15,
    center: latlng
  };

  //ピン表示
  var icon = new google.maps.MarkerImage('images/pin.png',
    new google.maps.Size(32, 32), //アイコンサイズ設定
    new google.maps.Point(0, 0) //アイコン位置調整
  );

  var map = new google.maps.Map(document.getElementById('map1'), mapOptions);

  var marker = new google.maps.Marker({
    position: latlng,
    map: map,
    icon: icon
  });
});
//minitheater-item__map-wrapper4
$(document).on("click", ".minitheater-item__map-wrapper4", function() {
  var edit_map;

  // modal表示
  $('#map-modal').modal('show');

  var latlng = new google.maps.LatLng(35.672140, 139.764979)
  var mapOptions = {
    zoom: 15,
    center: latlng
  };

  //ピン表示
  var icon = new google.maps.MarkerImage('images/pin.png',
    new google.maps.Size(32, 32), //アイコンサイズ設定
    new google.maps.Point(0, 0) //アイコン位置調整
  );

  var map = new google.maps.Map(document.getElementById('map1'), mapOptions);

  var marker = new google.maps.Marker({
    position: latlng,
    map: map,
    icon: icon
  });
});
//minitheater-item__map-wrapper5
$(document).on("click", ".minitheater-item__map-wrapper5", function() {
  var edit_map;

  // modal表示
  $('#map-modal').modal('show');

  var latlng = new google.maps.LatLng(35.695102, 139.760806)
  var mapOptions = {
    zoom: 15,
    center: latlng
  };

  //ピン表示
  var icon = new google.maps.MarkerImage('images/pin.png',
    new google.maps.Size(32, 32), //アイコンサイズ設定
    new google.maps.Point(0, 0) //アイコン位置調整
  );

  var map = new google.maps.Map(document.getElementById('map1'), mapOptions);

  var marker = new google.maps.Marker({
    position: latlng,
    map: map,
    icon: icon
  });
});
//minitheater-item__map-wrapper6
$(document).on("click", ".minitheater-item__map-wrapper6", function() {
  var edit_map;

  // modal表示
  $('#map-modal').modal('show');

  var latlng = new google.maps.LatLng(35.706502, 139.684545)
  var mapOptions = {
    zoom: 15,
    center: latlng
  };

  //ピン表示
  var icon = new google.maps.MarkerImage('images/pin.png',
    new google.maps.Size(32, 32), //アイコンサイズ設定
    new google.maps.Point(0, 0) //アイコン位置調整
  );

  var map = new google.maps.Map(document.getElementById('map1'), mapOptions);

  var marker = new google.maps.Marker({
    position: latlng,
    map: map,
    icon: icon
  });
});
//minitheater-item__map-wrapper7
$(document).on("click", ".minitheater-item__map-wrapper7", function() {
  var edit_map;

  // modal表示
  $('#map-modal').modal('show');

  var latlng = new google.maps.LatLng(35.701418, 139.742820)
  var mapOptions = {
    zoom: 15,
    center: latlng
  };

  //ピン表示
  var icon = new google.maps.MarkerImage('images/pin.png',
    new google.maps.Size(32, 32), //アイコンサイズ設定
    new google.maps.Point(0, 0) //アイコン位置調整
  );

  var map = new google.maps.Map(document.getElementById('map1'), mapOptions);

  var marker = new google.maps.Marker({
    position: latlng,
    map: map,
    icon: icon
  });
});
//minitheater-item__map-wrapper8
$(document).on("click", ".minitheater-item__map-wrapper8", function() {
  var edit_map;

  // modal表示
  $('#map-modal').modal('show');

  var latlng = new google.maps.LatLng(35.658883, 139.667601)
  var mapOptions = {
    zoom: 15,
    center: latlng
  };

  //ピン表示
  var icon = new google.maps.MarkerImage('images/pin.png',
    new google.maps.Size(32, 32), //アイコンサイズ設定
    new google.maps.Point(0, 0) //アイコン位置調整
  );

  var map = new google.maps.Map(document.getElementById('map1'), mapOptions);

  var marker = new google.maps.Marker({
    position: latlng,
    map: map,
    icon: icon
  });
});
//minitheater-item__map-wrapper9
$(document).on("click", ".minitheater-item__map-wrapper9", function() {
  var edit_map;

  // modal表示
  $('#map-modal').modal('show');

  var latlng = new google.maps.LatLng(35.634916, 139.714652)
  var mapOptions = {
    zoom: 15,
    center: latlng
  };

  //ピン表示
  var icon = new google.maps.MarkerImage('images/pin.png',
    new google.maps.Size(32, 32), //アイコンサイズ設定
    new google.maps.Point(0, 0) //アイコン位置調整
  );

  var map = new google.maps.Map(document.getElementById('map1'), mapOptions);

  var marker = new google.maps.Marker({
    position: latlng,
    map: map,
    icon: icon
  });
});


