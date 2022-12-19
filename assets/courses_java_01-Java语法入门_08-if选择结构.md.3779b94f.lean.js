import{_ as D}from"./chunks/ArticleMetadata.b7f9de94.js";import{_ as C,c as F,g as s,w as i,b as e,f as A,a as n,i as c,o as t,e as E,v as B}from"./app.5e486581.js";const d="/assets/202010071229226.de8dc283.png",u="/assets/202010071230720.b9723fc2.png",m="/assets/202010071230999.55d6a258.png",h="/assets/202010071232376.0fa0f7ac.png",g="/assets/202010071232956.e5014365.png",I=JSON.parse('{"title":"if选择结构","description":"","frontmatter":{"title":"if选择结构","author":"查尔斯","date":"2020/10/07 13:20","categories":["Java基础快速入门"],"tags":["Java","Java基础"]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"基础if选择结构","slug":"基础if选择结构","link":"#基础if选择结构","children":[{"level":3,"title":"复杂条件的基础if","slug":"复杂条件的基础if","link":"#复杂条件的基础if","children":[]}]},{"level":2,"title":"if-else选择结构","slug":"if-else选择结构","link":"#if-else选择结构","children":[]},{"level":2,"title":"多重if选择结构","slug":"多重if选择结构","link":"#多重if选择结构","children":[]},{"level":2,"title":"嵌套if选择结构","slug":"嵌套if选择结构","link":"#嵌套if选择结构","children":[{"level":3,"title":"字符串的比较","slug":"字符串的比较","link":"#字符串的比较","children":[]}]},{"level":2,"title":"答题环节","slug":"答题环节","link":"#答题环节","children":[{"level":3,"title":"模拟登录","slug":"模拟登录","link":"#模拟登录","children":[]},{"level":3,"title":"人机猜拳","slug":"人机猜拳","link":"#人机猜拳","children":[]},{"level":3,"title":"幸运抽奖","slug":"幸运抽奖","link":"#幸运抽奖","children":[]}]},{"level":2,"title":"后记","slug":"后记","link":"#后记","children":[]}],"relativePath":"courses/java/01-Java语法入门/08-if选择结构.md","lastUpdated":1663999704000}'),f={name:"courses/java/01-Java语法入门/08-if选择结构.md"},v=e("h1",{id:"if选择结构",tabindex:"-1"},[A("if选择结构 "),e("a",{class:"header-anchor",href:"#if选择结构","aria-hidden":"true"},"#")],-1),q=n("",7),_=n("",19),S=n("",11),P=n("",7),k=n("",24);function b(l,j,T,O,x,J){const r=D,y=c("ClientOnly"),a=c("Mermaid");return t(),F("div",null,[v,s(y,null,{default:i(()=>{var p,o;return[(((p=l.$frontmatter)==null?void 0:p.aside)??!0)&&(((o=l.$frontmatter)==null?void 0:o.showArticleMetadata)??!0)?(t(),E(r,{key:0,article:l.$frontmatter},null,8,["article"])):B("",!0)]}),_:1}),q,s(a,{id:"mermaid_382ee168",graph:"flowchart%20LR%0A%20%20%20%20A(%5B%E5%BC%80%E5%A7%8B%5D)%20--%3E%20B%7B%E6%9D%A1%E4%BB%B6%E8%A1%A8%E8%BE%BE%E5%BC%8F%7D%0A%20%20%20%20B%20--%3E%7C%E6%98%AF%7C%20C%5B%E8%AF%AD%E5%8F%A5%5D%0A%20%20%20%20C%20--%3E%20D%0A%20%20%20%20B%20--%3E%7C%E5%90%A6%7C%20D(%5B%E7%BB%93%E6%9D%9F%5D)"}),_,s(a,{id:"mermaid_382ee204",graph:"flowchart%20LR%0A%20%20%20%20A(%5B%E5%BC%80%E5%A7%8B%5D)%20--%3E%20B%7B%E6%9D%A1%E4%BB%B6%E8%A1%A8%E8%BE%BE%E5%BC%8F%7D%0A%20%20%20%20B%20--%3E%7C%E6%98%AF%7C%20C%5B%E8%AF%AD%E5%8F%A51%5D%0A%20%20%20%20C%20--%3E%20E%0A%20%20%20%20B%20--%3E%7C%E5%90%A6%7C%20D%5B%E8%AF%AD%E5%8F%A52%5D%0A%20%20%20%20D%20--%3E%20E(%5B%E7%BB%93%E6%9D%9F%5D)"}),S,s(a,{id:"mermaid_64a570de",graph:"flowchart%20LR%0A%20%20%20%20A(%5B%E5%BC%80%E5%A7%8B%5D)%20--%3E%20B%7B%E6%88%90%E7%BB%A9%20%3E%3D%2080%7D%0A%20%20%20%20B%20--%3E%7C%E6%98%AF%7C%20C%5B%E8%AF%AD%E5%8F%A51%5D%0A%20%20%20%20C%20--%3E%20G%0A%20%20%20%20B%20--%3E%7C%E5%90%A6%7C%20D%7B%E6%88%90%E7%BB%A9%20%3E%3D%2060%7D%0A%20%20%20%20D%20--%3E%7C%E6%98%AF%7C%20E%5B%E8%AF%AD%E5%8F%A52%5D%0A%20%20%20%20E%20--%3E%20G%0A%20%20%20%20D%20--%3E%7C%E5%90%A6%7C%20F%5B%E8%AF%AD%E5%8F%A53%5D%0A%20%20%20%20F%20--%3E%20G(%5B%E7%BB%93%E6%9D%9F%5D)"}),P,s(a,{id:"mermaid_64a57064",graph:"flowchart%20LR%0A%20%20%20%20A(%5B%E5%BC%80%E5%A7%8B%5D)%20--%3E%20B%7B%E6%9D%A1%E4%BB%B61%7D%0A%20%20%20%20B%20--%3E%7C%E6%98%AF%7C%20C%7B%E6%9D%A1%E4%BB%B62%7D%0A%20%20%20%20C%20--%3E%7C%E6%98%AF%7C%20D%5B%E8%AF%AD%E5%8F%A51%5D%0A%20%20%20%20D%20--%3E%20F%0A%20%20%20%20C%20--%3E%7C%E5%90%A6%7C%20E%5B%E8%AF%AD%E5%8F%A52%5D%0A%20%20%20%20E%20--%3E%7C%E5%90%A6%7C%20F%0A%20%20%20%20B%20--%3E%7C%E5%90%A6%7C%20F(%5B%E7%BB%93%E6%9D%9F%5D)"}),k])}const N=C(f,[["render",b]]);export{I as __pageData,N as default};
