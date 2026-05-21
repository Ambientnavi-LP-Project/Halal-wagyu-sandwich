/**
 * 店舗データ定義(sandwich業態)
 * 新しい店舗を追加するときは、この配列に store オブジェクトを追加するだけ。
 * Eleventy が自動で /{region}/{slug}/index.html を生成します。
 */
module.exports = {
  brand: {
    domain: "sandwich.halal-food-wagyu.com",
    ga4_id: "G-1079Q8XEB9",
    brand_name: "Halal Wagyu Sandwich",
    brand_slug: "sandwich"
  },

  stores: [
    {
      // ===== URL/識別 =====
      region: "tokyo",
      slug: "asakusa-shotengai",

      // ===== 店名 =====
      name_full_en: "Asakusa Restaurant Wagyu Steak Sandwich (Halal Vegan Gluten Free)",
      name_short: "Asakusa Restaurant",
      name_cn: "浅草 和牛 餐厅",

      // ===== 立地 =====
      city: "Asakusa, Tokyo",
      station_en: "Asakusa Station",
      address_en: "2-26-5 Asakusa, Taito-ku, Tokyo",
      address_postal: "111-0032",

      // ===== 連絡先 =====
      tel_display: "",
      tel_raw: "",

      // ===== 営業 =====
      hours: "11:00 — 23:00",
      hours_note: "Open Daily",

      // ===== 予約・地図 =====
      tablecheck_url: "https://www.tablecheck.com/ja/wagyu-burger-steak-teriyaki-5w-tokyo/reserve/message",
      maps_link: "https://maps.app.goo.gl/Fm9S1AoxVKvdDdp96",

      // ===== 評価 =====
      rating: "4.8",
      rating_count: "254",
      rating_source: "Google Review"
    }

    // ===== 2店舗目を追加するときはこの下にもう1つ { ... } を書くだけ =====
  ]
};
