function Earth(containerId) {
  this._viewer = undefined;
  this._containerId = containerId;
  this.init();
}

/**
 * 地球对象初始化操作
 */
Earth.prototype.init = function() {
  let viewer = (this._viewer = Freedo.FdApp.createDefaultViewer(
    this._containerId,
    {},
    {
      hasProvinceBoundaries: true, // 是否绘制中国省界
      showNewDefImagery: true,
    }
  ));
  viewer.scene.requestRenderMode = false;
  viewer.scene.highDynamicRange = false;
  viewer.showLogo = false;
  viewer.scene.globe.baseColor = Freedo.Color.BLACK;
  //导航器
  // viewer.extend(Freedo.FdTools.FdNavigationMixin, {
  //   enableCompass: true,
  //   enableZoomControls: false,
  //   enableDistanceLegend: false,
  //   enableCompassOuterRing: true
  // })

  //天空盒
  this.skyboxImages = [
    require("@img/Skyball/Skyball_RT.jpg"),
    require("@img/Skyball/Skyball_LF.jpg"),
    require("@img/Skyball/Skyball_FR.jpg"),
    require("@img/Skyball/Skyball_BK.jpg"),
    require("@img/Skyball/Skyball_UP.jpg"),
    require("@img/Skyball/Skyball_DN.jpg"),
  ];
  this.skyboxImages_dark = [
    require("@img/Skyball/RT.jpg"),
    require("@img/Skyball/LF.jpg"),
    require("@img/Skyball/FR.jpg"),
    require("@img/Skyball/BK.jpg"),
    require("@img/Skyball/UP.jpg"),
    require("@img/Skyball/DN.jpg"),
  ];

  //   Freedo.FdApp.setSkyBoxOnGround(viewer.scene, this.skyboxImages);
};

export default Earth;
