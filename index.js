// 業界
const industries = ['manufacture', 'financial', 'real_estate']

// 売上と利益のデータ
const report = [
  {
    industry: 'manufacture',
    department: 'chemical',
    domestic: 8060786,
    overseas: 7047191,
  },
  {
    industry: 'financial',
    department: 'insurance',
    domestic: 9859531,
    overseas: 7620080,
  },
  {
    industry: 'manufacture',
    department: 'paper',
    domestic: 3373828,
    overseas: 5384591,
  },
  {
    industry: 'real_estate',
    department: 'house',
    domestic: 8094797,
    overseas: 5303474,
  },
  {
    industry: 'financial',
    department: 'securities',
    domestic: 8045496,
    overseas: 9235759,
  },
  {
    industry: 'real_estate',
    department: 'hotel',
    domestic: 3806430,
    overseas: 5303474,
  },
  {
    industry: 'manufacture',
    department: 'oil',
    domestic: 5453934,
    overseas: 1977028,
  },
  {
    industry: 'real_estate',
    department: 'apartment',
    domestic: 7803898,
    overseas: 6480764,
  },
  {
    industry: 'manufacture',
    department: 'steel',
    domestic: 9085945,
    overseas: 5485068,
  },
]

const filtered_manufacture = report.filter((el) => {
  return el.industry === 'manufacture'
})

// 棒グラフのラベル（部門名）
bar_label = filtered_manufacture.map((el) => {
  return el.department
})

// 棒グラフの国内の売上データ
bar_domestic = filtered_manufacture.map((el) => {
  return el.domestic
})
// 棒グラフの海外の売上データ
bar_overseas = filtered_manufacture.map((el) => {
  return el.overseas
})

// 棒グラフを描画する id = bar_chart の canvas タグを指定
const bar_ctx = document.getElementById('bar_chart').getContext('2d')

// 棒グラフを描画
const bar_chart = new Chart(bar_ctx, {
  type: 'bar',
  data: {
    labels: bar_label,
    datasets: [
      {
        label: '国内',
        data: bar_domestic,
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
        borderWidth: 1,
      },
      {
        label: '海外',
        data: bar_overseas,
        backgroundColor: 'rgba(54, 162, 235, 0.8)',
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
})

// 各業界の売上総額の変数
// 初期値は0
let domestic_sum_manufacture = 0
let domestic_sum_financial = 0
let domestic_sum_real_estate = 0

// 繰り返し処理
report.forEach((el) => {
  if (el.industry === 'manufacture') {
    // manufacture の売上総額に国内の売上を加算
    domestic_sum_manufacture += el.domestic
  } else if (el.industry === 'financial') {
    // financial の売上総額に国内の売上を加算
    domestic_sum_financial += el.domestic
  } else {
    // real_estate の売上総額に国内の売上を加算
    domestic_sum_real_estate += el.domestic
  }
})

// 円グラフを描画する id = pie_chart の canvas タグを指定
const pie_ctx = document.getElementById('pie_chart').getContext('2d')

// 円グラフを描画
const pie_chart = new Chart(pie_ctx, {
  type: 'pie',
  data: {
    labels: industries,
    datasets: [
      {
        data: [
          domestic_sum_manufacture,
          domestic_sum_financial,
          domestic_sum_real_estate,
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
        ],

        borderWidth: 1,
      },
    ],
  },
})
