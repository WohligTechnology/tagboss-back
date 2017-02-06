// var adminURL = "http://localhost:1337/";
var adminURL = "http://104.155.129.33:1337/";

var imgurl = adminURL + "upload/";
var imgpath = adminURL + "upload/readFile";
var uploadurl = adminURL + "upload/";

// if(isproduction)
// {
//   adminURL =  "http://www.wohlig.co.in/demo/index.php";
// }
// else {
//   adminURL = "http://localhost/demo/index.php";
// }

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function ($http) {
  var navigation = [{
    name: "Home",
    classis: "active",
    anchor: "home",
    subnav: [{
      name: "Subnav1",
      classis: "active",
      anchor: "home"
    }]
  }];

  return {
    getnav: function () {
      return navigation;
    },
    makeactive: function (menuname) {
      for (var i = 0; i < navigation.length; i++) {
        if (navigation[i].name == menuname) {
          navigation[i].classis = "active";
        } else {
          navigation[i].classis = "";
        }
      }
      return menuname;
    },

    getAgency: function (callback) {
      return $http({
        url: adminURL + "inspection/search",
        method: "POST"
      }).success(callback);
    },

    getNotifications: function (callback) {
      return $http({
        url: adminURL + "user/getNotificationCount",
        method: "POST"
      }).success(callback);
    },

    updateOrderReadStatus: function (callback) {
      return $http({
        url: adminURL + "user/updateOrderReadStatus",
        method: "POST"
      }).success(callback);
    },

    updateSellerReadStatus: function (callback) {
      return $http({
        url: adminURL + "user/updateSellerReadStatus",
        method: "POST"
      }).success(callback);
    },

    updateBuyerReadStatus: function (callback) {
      return $http({
        url: adminURL + "user/updateBuyerReadStatus",
        method: "POST"
      }).success(callback);
    },




    getInventory: function (idata, callback) {
      var data = idata;
      return $http({
        url: adminURL + "inventory/search",
        method: "POST",
        data: data
      }).success(callback);
    },



    getAllRefundRequest: function (sdata, callback) {
      var data = sdata;
      return $http({
        url: adminURL + "ReturnRequest/getAll",
        method: "POST",
        data: data
      }).success(callback);
    },

    getOneRefundRequest: function (id, callback) {
      var data = {
        _id: id
      };
      return $http({
        url: adminURL + "ReturnRequest/getOne",
        method: "POST",
        data: data
      }).success(callback);
    },

    updateRefundRequest: function (senddata, callback) {
      var data = senddata
      return $http({
        url: adminURL + "ReturnRequest/save",
        method: "POST",
        data: data
      }).success(callback);
    },

    getOneInventory: function (idata, callback) {
      var data = {
        inventory: idata
      };
      return $http({
        url: adminURL + "inventory/getOneInventoryProduct",
        method: "POST",
        data: data
      }).success(callback);
    },



    getInventoryByAgency: function (callback) {
      return $http({
        url: adminURL + "inventory/getAllInventory",
        method: "POST"
      }).success(callback);
    },

    // getAllOrders: function (senddata, callback) {
    //   var data = senddata
    //   return $http({
    //     url: adminURL + "bill/getAllOrders",
    //     method: "POST",
    //     data: data
    //   }).success(callback);
    // },

    getAllOrders: function (senddata, callback) {
      var data = senddata
      return $http({
        url: adminURL + "Order/getAllOrderAdmin",
        method: "POST",
        data: data
      }).success(callback);
    },


    getAllOrdersByCoupon: function (senddata, callback) {
      var data = senddata
      return $http({
        url: adminURL + "coupon/getordersbycoupon",
        method: "POST",
        data: data
      }).success(callback);
    },

    getAllOrdersBySeller: function (senddata, callback) {
      var data = senddata
      return $http({
        url: adminURL + "bill/getbillbysellers",
        method: "POST",
        data: data
      }).success(callback);
    },
    getMaterial: function (callback) {
      return $http({
        url: adminURL + "moc/getall",
        method: "POST"
      }).success(callback);
    },

    getBrands: function (callback) {
      return $http({
        url: adminURL + "brand/search",
        method: "POST"
      }).success(callback);
    },



    updateBrand: function (branddata, callback) {
      var data = branddata;
      return $http({
        url: adminURL + "brand/save",
        method: "POST",
        data: data
      }).success(callback);
    },

    updateType: function (typedata, callback) {
      var data = typedata;
      return $http({
        url: adminURL + "type/save",
        method: "POST",
        data: data
      }).success(callback);
    },

    updateGrade: function (gradedata, callback) {
      var data = gradedata;
      return $http({
        url: adminURL + "GradesStandards/save",
        method: "POST",
        data: data
      }).success(callback);
    },

    getOrderCount: function (senddata, callback) {
      var data = senddata;
      return $http({
        url: adminURL + "bill/getOrderCount",
        method: "POST",
        data: data
      }).success(callback);
    },



    getGradesStandards: function (id, callback) {
      var data = {
        _id: id
      };
      return $http({
        url: adminURL + "GradesStandards/getGradesStandardsByMoc",
        method: "POST",
        data: data
      }).success(callback);
    },

    getTypes: function (id, callback) {
      var data = {
        _id: id
      };
      return $http({
        url: adminURL + "type/getTypeByCategory",
        method: "POST",
        data: data
      }).success(callback);
    },

    getOneOrder: function (id, callback) {
      var data = {
        billid: id
      };
      return $http({
        url: adminURL + "bill/getonebill",
        method: "POST",
        data: data
      }).success(callback);
    },


    getOrder: function (id, callback) {
      var data = {
        orderid: id
      };
      return $http({
        url: adminURL + "order/getoneorder",
        method: "POST",
        data: data
      }).success(callback);
    },


    updateOrderStatusByAdmin: function (odata, callback) {
      var data = odata;
      return $http({
        url: adminURL + "order/updateOrderStatusByAdmin",
        method: "POST",
        data: data
      }).success(callback);
    },

    updateBill: function (bdata, callback) {
      var data = bdata;
      return $http({
        url: adminURL + "bill/updateDeliveryStatus",
        method: "POST",
        data: data
      }).success(callback);
    },


    addMoc: function (mocdata, callback) {
      var data = mocdata;
      return $http({
        url: adminURL + "moc/save",
        method: "POST",
        data: data
      }).success(callback);
    },

    addGrade: function (mocdata, callback) {
      var data = mocdata;
      return $http({
        url: adminURL + "GradesStandards/save",
        method: "POST",
        data: data
      }).success(callback);
    },



    editMoc: function (mocdata, callback) {
      var data = mocdata;
      return $http({
        url: adminURL + "moc/save",
        method: "POST",
        data: data
      }).success(callback);
    },

    editGrade: function (mocdata, callback) {
      var data = mocdata;
      return $http({
        url: adminURL + "GradesStandards/save",
        method: "POST",
        data: data
      }).success(callback);
    },

    deleteMoc: function (id, callback) {
      var data = {
        _id: id
      };
      return $http({
        url: adminURL + "moc/delete",
        method: "POST",
        data: data
      }).success(callback);
    },


    deleteGrade: function (id, callback) {
      var data = {
        _id: id
      };
      return $http({
        url: adminURL + "GradesStandards/delete",
        method: "POST",
        data: data
      }).success(callback);
    },

    editPercentage: function (percentagedata, callback) {
      var data = percentagedata;
      return $http({
        url: adminURL + "moc/save",
        method: "POST",
        data: data
      }).success(callback);
    },
    addAgency: function (agencydata, callback) {
      var data = agencydata;
      return $http({
        url: adminURL + "inspection/save",
        method: "POST",
        data: data
      }).success(callback);
    },

    getOneAgency: function (id, callback) {
      var data = {
        _id: id
      };
      return $http({
        url: adminURL + "inspection/getOne",
        method: "POST",
        data: data
      }).success(callback);
    },

    deleteAgency: function (id, callback) {
      var data = {
        _id: id
      };
      return $http({
        url: adminURL + "inspection/delete",
        method: "POST",
        data: data
      }).success(callback);
    },

    sendReport: function (rdata, callback) {
      var data = rdata;
      return $http({
        url: adminURL + "inventory/sendReport",
        method: "POST",
        data: data
      }).success(callback);
    },

    rejectReport: function (rdata, callback) {
      var data = rdata;
      return $http({
        url: adminURL + "inventory/rejectReport",
        method: "POST",
        data: data
      }).success(callback);
    },

    acceptReport: function (rdata, callback) {
      var data = rdata;
      return $http({
        url: adminURL + "inventory/acceptReport",
        method: "POST",
        data: data
      }).success(callback);
    },


    updateSeller: function (sdata, callback) {
      var data = sdata;
      return $http({
        url: adminURL + "user/updateSeller",
        method: "POST",
        data: data
      }).success(callback);
    },

    updateBuyer: function (sdata, callback) {
      var data = sdata;
      return $http({
        url: adminURL + "user/updateBuyer",
        method: "POST",
        data: data
      }).success(callback);
    },

    updateUser: function (udata, callback) {
      var data = udata;
      return $http({
        url: adminURL + "user/blockUnblockUser",
        method: "POST",
        data: data
      }).success(callback);
    },



    assignInspection: function (rdata, callback) {
      var data = rdata;
      return $http({
        url: adminURL + "inventory/assignInspection",
        method: "POST",
        data: data
      }).success(callback);
    },

    Login: function (logindata, callback) {
      var data = logindata;
      return $http({
        url: adminURL + "register/login",
        method: "POST",
        data: data
      }).success(callback);
    },

    Logout: function (callback) {
      return $http({
        url: adminURL + "register/logout",
        method: "POST"
      }).success(callback);
    },

    getUser: function (callback) {
      return $http({
        url: adminURL + "register/getUser",
        method: "POST"
      }).success(callback);
    },

    getAllCoupon: function (cdata, callback) {
      var data = cdata;
      return $http({
        url: adminURL + "coupon/search",
        method: "POST",
        data: data
      }).success(callback);
    },

    deleteCoupon: function (id, callback) {
      var data = {
        _id: id
      };
      return $http({
        url: adminURL + "coupon/delete",
        method: "POST",
        data: data
      }).success(callback);
    },

    addCoupon: function (cdata, callback) {
      var data = cdata;
      return $http({
        url: adminURL + "coupon/save",
        method: "POST",
        data: data
      }).success(callback);
    },


    getOneCoupon: function (id, callback) {
      var data = {
        _id: id
      };
      return $http({
        url: adminURL + "coupon/getone",
        method: "POST",
        data: data
      }).success(callback);
    },

    getAllSeller: function (sdata, callback) {
      var data = sdata;
      return $http({
        url: adminURL + "user/getAllSeller",
        method: "POST",
        data: data
      }).success(callback);
    },

    getAllBuyer: function (sdata, callback) {
      var data = sdata;
      return $http({
        url: adminURL + "user/getAllBuyer",
        method: "POST",
        data: data
      }).success(callback);
    },

    // getAllVerifiedSeller: function (callback) {
    //   return $http({
    //     url: adminURL + "user/getAllVerifiedSeller",
    //     method: "POST"
    //   }).success(callback);
    // },

    getAllVerifiedSeller: function (fdata, callback) {
      var data = fdata;
      return $http({
        url: adminURL + "user/getSellers",
        method: "POST",
        data: data
      }).success(callback);
    },


    getAllVerifiedBuyer: function (callback) {
      return $http({
        url: adminURL + "user/getAllVerifiedBuyer",
        method: "POST"
      }).success(callback);
    },

    getAllBuyerTotals: function (fdata, callback) {
      var data = fdata;
      return $http({
        url: adminURL + "user/getAllBuyerTotals",
        method: "POST",
        data: data
      }).success(callback);
    },
    getOneSeller: function (id, callback) {
      var data = {
        '_id': id
      };
      return $http({
        url: adminURL + "user/getOne",
        method: "POST",
        data: data
      }).success(callback);
    },


    getSellerDashboard: function (id, callback) {
      var data = {
        'seller': id
      };
      return $http({
        url: adminURL + "user/getSellerDashboard",
        method: "POST",
        data: data
      }).success(callback);
    },


    forgotPassword: function (emailid, callback) {
      var data = {
        'email': emailid
      };
      return $http({
        url: adminURL + "Register/forgotPassword",
        method: "POST",
        data: data
      }).success(callback);
    },

    forgotPasswordInspection: function (emailid, callback) {
      var data = {
        'email': emailid
      };
      return $http({
        url: adminURL + "Inspection/forgotPassword",
        method: "POST",
        data: data
      }).success(callback);
    },

    getForgotPasswordEmail: function (emailid, callback) {
      var data = {
        'forgotPasswordLink': emailid
      };
      return $http({
        url: adminURL + "Register/emailVerification ",
        method: "POST",
        data: data
      }).success(callback);
    },


    resetPassword: function (pdata, callback) {
      var data = pdata;
      return $http({
        url: adminURL + "register/resetPassword",
        method: "POST",
        data: data
      }).success(callback);
    },

        getForgotPasswordEmailInspection: function (emailid, callback) {
      var data = {
        'forgotPasswordLink': emailid
      };
      return $http({
        url: adminURL + "Inspection/emailVerification ",
        method: "POST",
        data: data
      }).success(callback);
    },


    resetPasswordInspection: function (pdata, callback) {
      var data = pdata;
      return $http({
        url: adminURL + "Inspection/resetPassword",
        method: "POST",
        data: data
      }).success(callback);
    },



    getOneBuyer: function (id, callback) {
      var data = {
        '_id': id
      };
      return $http({
        url: adminURL + "user/getOne",
        method: "POST",
        data: data
      }).success(callback);
    },

    InspectionLogin: function (logindata, callback) {
      var data = logindata;
      return $http({
        url: adminURL + "inspection/Login",
        method: "POST",
        data: data
      }).success(callback);
    },

    InspectionLogout: function (callback) {
      return $http({
        url: adminURL + "inspection/logout",
        method: "POST"
      }).success(callback);
    },

    getInspectionUser: function (callback) {
      return $http({
        url: adminURL + "inspection/getInspectionUser",
        method: "POST"
      }).success(callback);
    },

    getAgencyByID: function (callback) {
      return $http({
        url: adminURL + "inspection/getAgency",
        method: "POST"
      }).success(callback);
    },

    editAgency: function (sendadata, callback) {
      var data = sendadata;
      return $http({
        url: adminURL + "inspection/save",
        method: "POST",
        data: data
      }).success(callback);
    },

    getAllPayments: function (senddata, callback) {
      var data = senddata;
      return $http({
        url: adminURL + "transaction/getalltransaction",
        method: "POST",
        data: data
      }).success(callback);
    },

    getAllPendingPayments: function (senddata, callback) {
      var data = senddata;
      return $http({
        url: adminURL + "transaction/getallpendingtransaction",
        method: "POST",
        data: data
      }).success(callback);
    },

    convertToPayments: function (callback) {
      return $http({
        url: adminURL + "transaction/converttopayments",
        method: "POST",
      }).success(callback);
    },

    getAllTransactionPayment: function (senddata, callback) {
      var data = senddata;
      return $http({
        url: adminURL + "transaction/getalltransactionpayment",
        method: "POST",
        data: data
      }).success(callback);
    },

    editPaymentStatus: function (senddata, callback) {
      var data = senddata;
      return $http({
        url: adminURL + "payment/editpayment",
        method: "POST",
        data: data
      }).success(callback);
    },


    getAllSetting: function (callback) {
      return $http({
        url: adminURL + "settings/search",
        method: "POST"
      }).success(callback);
    },

    getAllCategory: function (callback) {
      return $http({
        url: adminURL + "category/search",
        method: "POST"
      }).success(callback);
    },

    getMocByCat: function (id, callback) {
      var data = {
        _id: id
      };
      return $http({
        url: adminURL + "moc/getMocByCategory",
        method: "POST",
        data: data
      }).success(callback);
    },


    updateSetting: function (senddata, callback) {
      var data = senddata;
      return $http({
        url: adminURL + "settings/save",
        method: "POST",
        data: data
      }).success(callback);
    },

    getInventoryByProduct: function (senddata, callback) {
      var data = {
        "product": senddata
      };
      return $http({
        url: adminURL + "inventory/getInventorybyProduct",
        method: "POST",
        data: data
      }).success(callback);
    },

    editProduct: function (senddata, callback) {
      var data = senddata;
      return $http({
        url: adminURL + "inventory/save",
        method: "POST",
        data: data
      }).success(callback);
    },

    getAllSellerProducts: function (callback) {
      // var data = senddata;
      return $http({
        url: adminURL + "inventory/getAllSellerProducts",
        method: "POST"
      }).success(callback);
    },

    getDashboard: function (callback) {
      // var data = senddata;
      return $http({
        url: adminURL + "user/getAdminDashboard",
        method: "POST"
      }).success(callback);
    },



  };
});