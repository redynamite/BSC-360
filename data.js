var APP_DATA = {
  "scenes": [
    {
      "id": "0-p1",
      "name": "P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.02062229006992311,
        "pitch": 0.02999351115204618,
        "fov": 1.405674899209756
      },
      "linkHotspots": [
        {
          "yaw": 1.49820685911327,
          "pitch": 0.13033839949647152,
          "rotation": 0,
          "target": "1-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-p2",
      "name": "P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7268148157022303,
          "pitch": 0.0869586627469694,
          "rotation": 0,
          "target": "0-p1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "BSC Budget Store 1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
