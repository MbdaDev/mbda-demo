import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-second-section',
  imports: [CommonModule],
  templateUrl: './second-section.component.html',
  styleUrl: './second-section.component.scss',
})
export class SecondSectionComponent {
  helpersList: {
    title: string;
    helps: { helpName: string; helpLink: string }[];
  }[] = [
    {
      title: 'Get support',
      helps: [
        {
          helpName: 'Help Center',
          helpLink:
            'https://so.alibaba.com/s/buyer/?spm=a2700.login.0.0.1c261afapmwOTG',
        },
        {
          helpName: 'Live chat',
          helpLink:
            'https://ai.alimebot.alibaba.com/intl/index.htm?spm=a2700.login.0.0.1c261afapmwOTG&from=qB7A60vABX&_lang=en_US',
        },

        {
          helpName: 'Check order status',
          helpLink:
            'https://i.alibaba.com/globalBuyerIndex.htm?spm=a2700.login.0.0.1c261afapmwOTG',
        },

        {
          helpName: 'Refunds',
          helpLink:
            'https://biz.alibaba.com/order/list.htm?spm=a2700.login.0.0.1c261afapmwOTG&role=buyer&tradelog=from_orderlist_menu&menuCode=order_management_all_order_leaf_buyer',
        },
        {
          helpName: 'Report abuse',
          helpLink:
            'https://my-health.alibaba.com/helpCenter/mainTab.htm?spm=a2700.login.0.0.1c261afapmwOTG',
        },
      ],
    },
    {
      title: 'Payments and protections',
      helps: [
        {
          helpName: 'Safe and easy payments',
          helpLink:
            'https://tradeassurance.alibaba.com/ta/Payment.htm?spm=a2700.login.0.0.1c261afapmwOTG',
        },
        {
          helpName: 'Alibaba.com Business Edge Credit Card',
          helpLink:
            'https://air.alibaba.com/app/sc-assets/checkout-lp/pages_cardless_lp.html?spm=a2700.login.0.0.1c261afapmwOTG',
        },
        {
          helpName: 'Money-back policy',
          helpLink:
            'https://tradeassurance.alibaba.com/ta/MoneyBackPolicy.htm?spm=a2700.login.0.0.1c261afapmwOTG',
        },
        {
          helpName: 'On-time shipping',
          helpLink:
            'https://tradeassurance.alibaba.com/ta/ShippingAndLogistics.htm?spm=a2700.login.0.0.1c261afapmwOTG',
        },
        {
          helpName: 'After-sales protections',
          helpLink:
            'https://tradeassurance.alibaba.com/ta/AfterSales.htm?spm=a2700.login.0.0.1c261afapmwOTG',
        },
        {
          helpName: 'Product monitoring services',
          helpLink:
            'https://inspection.alibaba.com/?spm=a2700.login.0.0.1c261afapmwOTG&tracelog=footer_inspection',
        },
      ],
    },
    {
      title: 'Source on Alibaba.com',
      helps: [
        {
          helpName: 'Request for Quotation',
          helpLink:
            'https://rfq.alibaba.com/rfq/exhibition.htm?spm=a2700.login.0.0.1c261afapmwOTG&tracelog=footer_rfq',
        },
        {
          helpName: 'Membership program',
          helpLink:
            'https://sale.alibaba.com/p/dd4pt71ef/index.html?spm=a2700.login.0.0.1c261afapmwOTG&wx_screen_direc=portrait&wx_navbar_transparent=true&path=/p/dd4pt71ef/index.html&ncms_spm=a27aq.25843503&prefetchKey=met&wx_screen_direc=portrait&wx_navbar_transparent=true%3Fspm%3Da27aq.28224311.scGlobalHomeHeader.425.4f8a6c40lq6V8C&tracelog=pc_header#/',
        },
        {
          helpName: 'Alibaba.com Logistics',
          helpLink:
            'https://logistics.alibaba.com/buyer/luyou/public/blg/home.htm?spm=a2700.login.0.0.1c261afapmwOTG&wx_navbar_transparent=true&from=btnNav',
        },
        {
          helpName: 'Sales tax and VAT',
          helpLink:
            'https://sale.alibaba.com/p/ddhcqxncs?spm=a2700.login.0.0.1c261afapmwOTG&wx_navbar_transparent=true&path=/p/ddhcqxncs&ncms_spm=a27aq.28348692&prefetchKey=met&wx_xpage=true',
        },

        {
          helpName: 'Alibaba.com Reads',
          helpLink:
            'https://baba-blog.com/?spm=a2700.login.0.0.1c261afapmwOTG&tracelog=footer_alibabablog',
        },
      ],
    },
    {
      title: 'Sell on Alibaba.com',
      helps: [
        {
          helpName: 'Start selling',
          helpLink:
            'https://seller.alibaba.com/how-to-sell?spm=a2700.login.0.0.1c261afapmwOTG&tracelog=footer_sell_train&language=en_US&tenantId=US',
        },
        {
          helpName: 'Seller Central',
          helpLink:
            'https://i.alibaba.com/globalSellerIndex.htm?spm=a2700.login.0.0.1c261afapmwOTG',
        },
        {
          helpName: 'Become a Verified Supplier',
          helpLink:
            'https://seller.alibaba.com/verified_supplier?spm=a2700.login.0.0.1c261afapmwOTG',
        },
        {
          helpName: 'Partnerships',
          helpLink:
            'https://partner.alibaba.com/?spm=a2700.login.0.0.1c261afapmwOTG',
        },
        {
          helpName: 'Download the app for suppliers',
          helpLink:
            'https://activity.alibaba.com/page/SupplierAPP_download.html?spm=a2700.login.0.0.1c261afapmwOTG',
        },
      ],
    },
    {
      title: 'Get to know us',
      helps: [
        {
          helpName: 'About Alibaba.com',
          helpLink:
            'https://www.alibaba.com/?spm=a2700.login.0.0.1c261afapmwOTG&homeType=newUser',
        },
        {
          helpName: 'Corporate responsibility',
          helpLink:
            'https://www.alibabagroup.com/en-US/esg?spm=a2700.login.0.0.1c261afapmwOTG',
        },
        {
          helpName: 'News center',
          helpLink: 'https://baba-blog.com/?spm=a2700.login.0.0.1c261afapmwOTG',
        },
        {
          helpName: 'Careers',
          helpLink:
            'https://talent.alibaba.com/en/home?spm=a2700.login.0.0.1c261afapmwOTG',
        },
      ],
    },
  ];

  paymentIconLinks: string[] = [
    'https://s.alicdn.com/@img/imgextra/i1/O1CN01L00bAM1TmF3L42KkI_!!6000000002424-2-tps-286-80.png',

    'https://s.alicdn.com/@img/imgextra/i4/O1CN013pymTh1OIrZGMQ6iO_!!6000000001683-2-tps-93-80.png',

    'https://s.alicdn.com/@img/imgextra/i3/O1CN01CoqZOX1E5uCoNiJIr_!!6000000000301-2-tps-75-80.png',

    'https://s.alicdn.com/@img/imgextra/i3/O1CN01xBSIuv1ReKzDOHrTb_!!6000000002136-2-tps-214-80.png',

    'https://s.alicdn.com/@img/imgextra/i1/O1CN01ba6iSo1PHJqZo1Gba_!!6000000001815-2-tps-81-80.png',
  ];

  securityIcons: string[] = [
    'https://s.alicdn.com/@img/imgextra/i4/O1CN01dsw9V61Lbh0D1f9JG_!!6000000001318-2-tps-205-112.png',

    'https://s.alicdn.com/@img/imgextra/i4/O1CN01sXbha020agNJcLC4l_!!6000000006866-2-tps-148-112.png',

    'https://s.alicdn.com/@img/imgextra/i1/O1CN01F2dH281hwEJACdKgv_!!6000000004341-2-tps-113-112.png',

    'https://s.alicdn.com/@img/imgextra/i1/O1CN017IIzE71MpGLv2nxMd_!!6000000001483-2-tps-260-112.png',

    'https://s.alicdn.com/@img/imgextra/i1/O1CN01pwSjDv25t4M1W8Xu8_!!6000000007583-2-tps-165-112.png',

    'https://s.alicdn.com/@img/imgextra/i3/O1CN01nXwvxv1y6Ktth82ah_!!6000000006529-2-tps-222-112.png',

    'https://s.alicdn.com/@img/imgextra/i3/O1CN01IxKcyY1rBeBQ8Yn01_!!6000000005593-2-tps-263-112.png',

    'https://s.alicdn.com/@img/imgextra/i3/O1CN01lX0cCy1PTgXZw0XZK_!!6000000001842-2-tps-324-112.png',

    'https://s.alicdn.com/@img/imgextra/i3/O1CN01Wv6lOf1OTOfx5Dppk_!!6000000001706-2-tps-171-112.png',

    'https://s.alicdn.com/@img/imgextra/i4/O1CN01yLWgha1BtsZXZDDih_!!6000000000004-2-tps-158-112.png',

    'https://s.alicdn.com/@img/imgextra/i3/O1CN01EXUFiW1EgXt8o8Ev9_!!6000000000381-2-tps-125-112.png',

    'https://s.alicdn.com/@img/imgextra/i3/O1CN01tkTNhl1ZaEMHoGWsA_!!6000000003210-2-tps-137-112.png',

    'https://s.alicdn.com/@img/imgextra/i4/O1CN010I5eGr1aDcQ82EcRH_!!6000000003296-2-tps-169-112.png',

    'https://s.alicdn.com/@img/imgextra/i1/O1CN01EF6Zjm21spgURRwKI_!!6000000007041-2-tps-138-112.png',
  ];

  socials: { link: string; img: string }[] = [
    {
      link: 'https://www.facebook.com/Alibaba.comGlobal?file=Alibaba.comGlobal',
      img: 'https://s.alicdn.com/@img/imgextra/i4/O1CN01s7Kv0o1f2EXBWZFH3_!!6000000003948-2-tps-84-84.png',
    },

    {
      link: 'https://www.linkedin.com/company/alibaba-com',
      img: 'https://s.alicdn.com/@img/imgextra/i4/O1CN01pokjTE1pWawtK9vr1_!!6000000005368-2-tps-84-84.png',
    },

    {
      link: 'https://twitter.com/AlibabaB2B?',
      img: 'https://s.alicdn.com/@img/imgextra/i1/O1CN01BdrubJ21eAtYdzBJF_!!6000000007009-2-tps-84-84.png',
    },

    {
      link: 'https://www.instagram.com/alibaba.com_official',
      img: 'https://s.alicdn.com/@img/imgextra/i4/O1CN01FX2glN20tSUpYMinl_!!6000000006907-2-tps-84-84.png',
    },

    {
      link: 'https://www.youtube.com/channel/UCSoIxtP6J6oNo_d1njSluxw?',
      img: 'https://s.alicdn.com/@img/imgextra/i4/O1CN01dPyTY31vW2A2bd0uC_!!6000000006179-2-tps-84-84.png',
    },

    {
      link: 'https://www.tiktok.com/@alibaba.com_buyercentral',
      img: 'https://s.alicdn.com/@img/imgextra/i3/O1CN01JzRJnr28MxJY1e18t_!!6000000007919-2-tps-84-84.png',
    },
  ];
}
