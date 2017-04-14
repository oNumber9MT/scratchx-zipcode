(function(ext) {

  ext._shutdown = function() {};

  ext._getStatus = function() {
    return {status: 2, msg: 'Ready'};
  };

  // 都道府県/Address1
  ext.getAddress1 = function(zipcode, callback) {
    $.ajax({
      url: 'http://zipcloud.ibsnet.co.jp/api/search?zipcode=' + encodeURIComponent(zipcode),
      dataType: 'jsonp',
      success: function(data) {
        if (data.status == 200) {
          console.log(data);
          var result = data.results[0].address1;
          if (result == undefined) {
            callback('');
          } else {
            callback(result);
          }
        } else {
          callback('');
        }
      }
    });
  };

  // 市区町村/Address2
  ext.getAddress2 = function(zipcode, callback) {
    $.ajax({
      url: 'http://zipcloud.ibsnet.co.jp/api/search?zipcode=' + encodeURIComponent(zipcode),
      dataType: 'jsonp',
      success: function(data) {
        if (data.status == 200) {
          console.log(data);
          var result = data.results[0].address2;
          if (result == undefined) {
            callback('');
          } else {
            callback(result);
          }
        } else {
          callback('');
        }
      }
    });
  };

  // 町名/Address3
  ext.getAddress3 = function(zipcode, callback) {
    $.ajax({
      url: 'http://zipcloud.ibsnet.co.jp/api/search?zipcode=' + encodeURIComponent(zipcode),
      dataType: 'jsonp',
      success: function(data) {
        if (data.status == 200) {
          console.log(data);
          var result = data.results[0].address3;
          if (result == undefined) {
            callback('');
          } else {
            callback(result);
          }
        } else {
          callback('');
        }
      }
    });
  };

  // 都道府県（カナ）/Kana1
  ext.getKana1 = function(zipcode, callback) {
    $.ajax({
      url: 'http://zipcloud.ibsnet.co.jp/api/search?zipcode=' + encodeURIComponent(zipcode),
      dataType: 'jsonp',
      success: function(data) {
        if (data.status == 200) {
          console.log(data);
          var result = data.results[0].kana1;
          if (result == undefined) {
            callback('');
          } else {
            callback(result);
          }
        } else {
          callback('');
        }
      }
    });
  };

  // 市区町村（カナ）/Kana2
  ext.getKana2 = function(zipcode, callback) {
    $.ajax({
      url: 'http://zipcloud.ibsnet.co.jp/api/search?zipcode=' + encodeURIComponent(zipcode),
      dataType: 'jsonp',
      success: function(data) {
        if (data.status == 200) {
          console.log(data);
          var result = data.results[0].kana2;
          if (result == undefined) {
            callback('');
          } else {
            callback(result);
          }
        } else {
          callback('');
        }
      }
    });
  };

  // 町名（カナ）/Kana3
  ext.getKana3 = function(zipcode, callback) {
    $.ajax({
      url: 'http://zipcloud.ibsnet.co.jp/api/search?zipcode=' + encodeURIComponent(zipcode),
      dataType: 'jsonp',
      success: function(data) {
        if (data.status == 200) {
          console.log(data);
          var result = data.results[0].kana3;
          if (result == undefined) {
            callback('');
          } else {
            callback(result);
          }
        } else {
          callback('');
        }
      }
    });
  };

  var descriptor = {
    blocks: [
      ['R', '〒 %s の都道府県', 'getAddress1'],
      ['R', '〒 %s の市区町村', 'getAddress2'],
      ['R', '〒 %s の町名', 'getAddress3'],
      ['R', '〒 %s の都道府県（カナ）', 'getKana1'],
      ['R', '〒 %s の市区町村（カナ）', 'getKana2'],
      ['R', '〒 %s の町名（カナ）', 'getKana3']
    ]
  };

  // Scratch に作ったブロックを登録します
  ScratchExtensions.register('Zipcode Extension', descriptor, ext);
})({});