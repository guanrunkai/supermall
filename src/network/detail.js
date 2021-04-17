import { request } from './request'


export function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })


}
//店铺相关信息 如 标题 折扣  价格 服务
export class Goods{
    constructor(itemInfo, columns, services) {
      this.title = itemInfo.title;
      this.desc = itemInfo.desc;
      this.realPrice=itemInfo.lowNowPrice
      this.newPrice = itemInfo.price;
      this.oldPrice = itemInfo.oldPrice;
      this.discount = itemInfo.discountDesc;
      this.columns = columns;
      this.services = services;
      this.nowPrice = itemInfo.highNowPrice;
    }
  }

//商铺评分相关信息
  export class Shop {
    constructor(shopInfo) {
      this.logo = shopInfo.shopLogo;
      this.name = shopInfo.name;
      this.fans = shopInfo.cFans;
      this.sells = shopInfo.cSells;
      this.score = shopInfo.score;
      this.goodsCount = shopInfo.cGoods
    }
  }
//商铺尺码相关信息
  export class GoodsParam {
    constructor(info, rule) {
      // 注: images可能没有值(某些商品有值, 某些没有值)
      this.image = info.images ? info.images[0] : '';
      this.infos = info.set;
      this.sizes = rule.tables;
    }
  }

//商品下方推荐商品列表
  export function getRecommend(){
    return request({
      url:'/recommend'
    })
  }