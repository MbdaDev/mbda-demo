import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  productLinks: { name: string; link: string }[] = [
    {
      name: 'AliExpress',
      link: 'https://www.aliexpress.com/?spm=a2700.login.0.0.1c261afay99YVW',
    },

    {
      name: '1688.com',
      link: 'https://www.1688.com/?spm=a2700.login.0.0.1c261afay99YVW',
    },

    {
      name: 'Tmall Taobao World',
      link: 'https://g-sellercenter.taobao.com/mail?spm=a2700.login.0.0.1c261afay99YVW',
    },

    {
      name: 'Alipay',
      link: 'https://global.alipay.com/platform/site/ihome',
    },

    {
      name: 'Lazada',
      link: 'https://www.lazada.com/en/?spm=a2700.login.0.0.1c261afay99YVW',
    },

    {
      name: 'Taobao Global',
      link: 'https://world.taobao.com/?spm=a2700.login.0.0.1c261afay99YVW',
    },

    {
      name: 'TAO',
      link: 'https://jp.tao.co/?spm=a2700.login.0.0.1c261afay99YVW',
    },
  ];

  policies: { name: string; link: string }[] = [
    {
      name: 'Policies and rules',
      link: 'https://rulechannel.alibaba.com/icbu?spm=a2700.login.0.0.1c261afay99YVW#/',
    },

    {
      name: 'Legal Notice',
      link: 'https://rulechannel.alibaba.com/icbu?spm=a2700.login.0.0.1c261afay99YVW&type=detail&ruleId=20002006&cId=147#/rule/detail?ruleId=20002006&cId=147',
    },

    {
      name: 'Product Listing Policy',
      link: 'https://rulechannel.alibaba.com/icbu?spm=a2700.login.0.0.1c261afay99YVW&type=detail&ruleId=2047&cId=1396#/rule/detail?cId=1396&ruleId=2047',
    },

    {
      name: 'Intellectual Property Protection',
      link: 'https://ipp.aidcgroup.net/?spm=a2700.login.0.0.1c261afay99YVW#/ippHome',
    },

    {
      name: 'Privacy Policy',
      link: 'https://rulechannel.alibaba.com/icbu?spm=a2700.login.0.0.1c261afay99YVW&type=detail&ruleId=2034&cId=1306#/rule/detail?cId=1306&ruleId=2034',
    },

    {
      name: 'Terms of Use',
      link: 'https://rulechannel.alibaba.com/icbu?spm=a2700.login.0.0.1c261afay99YVW&type=detail&ruleId=2041&cId=1307#/rule/detail?cId=1307&ruleId=2041',
    },

    {
      name: 'Integrity Compliance',
      link: 'https://aidc.jubao.alibaba.com/?spm=a2700.login.0.0.1c261afay99YVW',
    },
  ];
}
