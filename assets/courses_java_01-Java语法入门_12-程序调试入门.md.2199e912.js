import{_ as c}from"./chunks/ArticleMetadata.23ec6aac.js";import{_ as i,c as d,g as u,w as g,b as t,f as h,a as m,i as b,o as l,e as y,q as _}from"./app.82639416.js";const F="/assets/202010081752199.842de295.gif",D="/assets/202010081752326.ad8a74cc.jpeg",f="/assets/202010081752612.69cba9c6.png",C="/assets/202010081752667.2f5d7193.png",B="/assets/202010081752687.b16b8f79.jpeg",A="/assets/202010081755202.0b183d65.png",v="/assets/202010081755352.6f7be0c7.gif",E="/assets/202010081755573.79441bfa.gif",k="/assets/202010081755606.8c43eb68.png",x="/assets/202010081755712.1906c69d.gif",q="/assets/202010081755798.9731bc7e.gif",w="/assets/202010081756376.bc10c6c1.gif",j="/assets/202010081756666.a15167a8.gif",S="/assets/202010081756767.cb1f6da0.jpeg",U=JSON.parse('{"title":"\u7A0B\u5E8F\u8C03\u8BD5\u5165\u95E8","description":"","frontmatter":{"title":"\u7A0B\u5E8F\u8C03\u8BD5\u5165\u95E8","author":"\u67E5\u5C14\u65AF","date":"2020/10/08 19:07","categories":["Java\u57FA\u7840\u5FEB\u901F\u5165\u95E8"],"tags":["Java","Java\u57FA\u7840"]},"headers":[{"level":2,"title":"\u524D\u8A00","slug":"\u524D\u8A00"},{"level":2,"title":"bug\u548Cdebug","slug":"bug\u548Cdebug"},{"level":2,"title":"\u8C03\u8BD5\u601D\u8DEF","slug":"\u8C03\u8BD5\u601D\u8DEF"},{"level":2,"title":"\u8C03\u8BD5\u65B9\u5F0F","slug":"\u8C03\u8BD5\u65B9\u5F0F"},{"level":3,"title":"\u5C0F\u9EC4\u9E2D\u8C03\u8BD5\u6CD5","slug":"\u5C0F\u9EC4\u9E2D\u8C03\u8BD5\u6CD5"},{"level":3,"title":"\u8F93\u51FA\u8BED\u53E5","slug":"\u8F93\u51FA\u8BED\u53E5"},{"level":3,"title":"\u4E13\u4E1A\u8C03\u8BD5\u5DE5\u5177[\u91CD\u8981]","slug":"\u4E13\u4E1A\u8C03\u8BD5\u5DE5\u5177-\u91CD\u8981"},{"level":2,"title":"Eclipse\u8C03\u8BD5","slug":"eclipse\u8C03\u8BD5"},{"level":3,"title":"\u95EE\u9898\u63CF\u8FF0","slug":"\u95EE\u9898\u63CF\u8FF0"},{"level":3,"title":"\u4F7F\u7528\u6B65\u9AA4","slug":"\u4F7F\u7528\u6B65\u9AA4"},{"level":2,"title":"\u53C2\u8003\u6587\u732E","slug":"\u53C2\u8003\u6587\u732E"},{"level":2,"title":"\u540E\u8BB0","slug":"\u540E\u8BB0"}],"relativePath":"courses/java/01-Java\u8BED\u6CD5\u5165\u95E8/12-\u7A0B\u5E8F\u8C03\u8BD5\u5165\u95E8.md","lastUpdated":1661438445000}'),J={name:"courses/java/01-Java\u8BED\u6CD5\u5165\u95E8/12-\u7A0B\u5E8F\u8C03\u8BD5\u5165\u95E8.md"},T=t("h1",{id:"\u7A0B\u5E8F\u8C03\u8BD5\u5165\u95E8",tabindex:"-1"},[h("\u7A0B\u5E8F\u8C03\u8BD5\u5165\u95E8 "),t("a",{class:"header-anchor",href:"#\u7A0B\u5E8F\u8C03\u8BD5\u5165\u95E8","aria-hidden":"true"},"#")],-1),I=m('<h2 id="\u524D\u8A00" tabindex="-1">\u524D\u8A00 <a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a></h2><p><strong>C\uFF1A</strong> \u5B66\u4E60\u5230\u672C\u7BC7\u7684\u5404\u4F4D\u540C\u5B66\uFF0C\u60F3\u5FC5\u5BF9\u7F16\u5199\u671F\u3001\u8FD0\u884C\u671F\u7684\u62A5\u7EA2\uFF0C\u62A5\u9519\u65E9\u5DF2\u89C1\u602A\u4E0D\u602A\u4E86\u3002</p><p><img src="'+F+'" alt="202010081752199"></p><p>\u51FA\u4E86\u95EE\u9898\u540E\uFF0C\u9762\u5411\u767E\u5EA6\u7F16\u7A0B\uFF0C\u89E3\u51B3\u4E86\u4E00\u90E8\u5206\uFF0C\u8FD8\u6709\u5F88\u591A\u9690\u85CF\u5728 &quot;\u51B0\u5C71&quot; \u4E4B\u4E0B\uFF0C\u6240\u4EE5\u5728\u5DE5\u4F5C\u4E2D\uFF0C\u5927\u5BB6\u90FD\u81EA\u5632\u662F\u5728\u5199 Bug\u3002</p><p><img src="'+D+'" alt="202010081752326"></p><p>\u6B63\u56E0\u5982\u6B64\uFF0C<em>\u4E00\u4E2A\u6709\u7ECF\u9A8C\u7684\u7A0B\u5E8F\u5458\u4E0D\u4EC5\u4EC5\u8981\u719F\u7EC3\u5404\u79CD\u6280\u672F\uFF0C\u8FD8\u5E94\u8BE5\u8868\u73B0\u51FA\u6210\u719F\u4E14\u7A33\u5B9A\u7684 Bug \u89E3\u51B3\u80FD\u529B</em> \u3002\u7B14\u8005\u5728\u672C\u7BC7\u5C06\u4F1A\u5E26\u4F60\u719F\u6089\u4E0B\u5E38\u89C1\u7684 Bug \u89E3\u51B3\u601D\u8DEF\u53CA\u65B9\u5F0F\uFF0C <strong>\u638C\u63E1\u4E86\u8FD9\u4E9B\u6280\u5DE7</strong> \uFF0C\u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u4F60\u4F1A\u8F7B\u677E\u4E00\u4E9B\u7684\u3002</p><h2 id="bug\u548Cdebug" tabindex="-1">bug\u548Cdebug <a class="header-anchor" href="#bug\u548Cdebug" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">bug \uFF08\u8BA1\u7B97\u673A\u9886\u57DF\u6F0F\u6D1E\uFF09</p><p>bug \u662F\u8BA1\u7B97\u673A\u9886\u57DF\u4E13\u4E1A\u672F\u8BED\uFF0C\u539F\u610F\u662F &quot;\u81ED\u866B&quot;\uFF0C\u73B0\u5728\u7528\u6765\u6307\u4EE3\u8BA1\u7B97\u673A\u4E0A\u5B58\u5728\u7684\u6F0F\u6D1E\uFF0C\u539F\u56E0\u662F\u7CFB\u7EDF\u5B89\u5168\u7B56\u7565\u4E0A\u5B58\u5728\u7684\u7F3A\u9677\uFF0C\u6709\u653B\u51FB\u8005\u80FD\u591F\u5728\u672A\u6388\u6743\u7684\u60C5\u51B5\u4E0B\u8BBF\u95EE\u7684\u5371\u5BB3\u3002</p><p>bug \u8FD9\u4E2A\u672F\u8BED\u4ECE &quot;\u81ED\u866B&quot; \u8F6C\u6362\u4E3A\u6F0F\u6D1E\uFF0C\u8FD8\u6709\u4E00\u6BB5 &quot;\u53EF\u6B4C\u53EF\u6CE3&quot; \u7684\u6545\u4E8B \uFF1A\u4E3A\u9A6C\u514B2\u53F7\uFF08Harvard Mark II\uFF09\u7F16\u5236\u7A0B\u5E8F\u7684\u683C\u857E\u4E1D\xB7\u970D\u73C0\uFF08Grace Hopper\uFF09\u662F\u4E00\u4F4D\u7F8E\u56FD\u6D77\u519B\u51C6\u5C06\u53CA\u8BA1\u7B97\u673A\u79D1\u5B66\u5BB6\uFF0C\u540C\u65F6\u4E5F\u662F\u4E16\u754C\u6700\u65E9\u7684\u4E00\u6279\u7A0B\u5E8F\u8BBE\u8BA1\u5E08\u4E4B\u4E00\u3002\u6709\u4E00\u5929\uFF0C\u5979\u5728\u8C03\u8BD5\u8BBE\u5907\u65F6\u51FA\u73B0\u6545\u969C\uFF0C\u62C6\u5F00\u7EE7\u7535\u5668\u540E\uFF0C\u53D1\u73B0\u6709\u53EA\u98DE\u86FE\u88AB\u5939\u6241\u5728\u89E6\u70B9\u4E2D\u95F4\uFF0C\u4ECE\u800C\u201C\u5361\u201D\u4F4F\u4E86\u673A\u5668\u7684\u8FD0\u884C\u3002\u4E8E\u662F\uFF0C\u970D\u73C0\u8BD9\u8C10\u5730\u628A\u7A0B\u5E8F\u6545\u969C\u7EDF\u79F0\u4E3A\u201C\u81ED\u866B\uFF08BUG\uFF09\u201D\uFF0C\u628A\u6392\u9664\u7A0B\u5E8F\u6545\u969C\u53EB DEBUG\uFF0C\u800C\u8FD9\u5947\u602A\u7684\u201C\u79F0\u547C\u201D\uFF0C\u7ADF\u6210\u4E3A\u540E\u6765\u8BA1\u7B97\u673A\u9886\u57DF\u7684\u4E13\u4E1A\u884C\u8BDD\u3002[1]</p></div><p><img src="'+f+'" alt="202010081752612"></p><p><img src="'+C+'" alt="202010081752667"></p><p>\u53E6\u5916\u4EE5\u540E\u5FEB\u522B\u5916\u884C\u4F3C\u7684\u558A <code>\u5FC5\u5FE7\u8BA1</code> \u4E86\uFF0C\u4EBA\u5BB6\u53EB <code>bug</code> \u3002</p><details class="details custom-block"><summary>\u884C\u4E1A\u5185\u8FD8\u6709\u8FD9\u4E48\u4E00\u4E2A\u51B7\u7B11\u8BDD\u662F\uFF1A\u7A0B\u5E8F\u5458\u6700\u8BA8\u538C\u4E7E\u9686\u7684\u54EA\u4E2A\u513F\u5B50\uFF1F</summary><p>\u516B\u963F\u54E5\uFF08bug\uFF09</p></details><h2 id="\u8C03\u8BD5\u601D\u8DEF" tabindex="-1">\u8C03\u8BD5\u601D\u8DEF <a class="header-anchor" href="#\u8C03\u8BD5\u601D\u8DEF" aria-hidden="true">#</a></h2><p>\u65E5\u5E38\u751F\u6D3B\u4E2D\uFF0C\u5BB6\u7528\u7535\u8DEF\u51FA\u73B0\u95EE\u9898\u65F6\uFF0C\u6253\u4E86\u7EF4\u4FEE\u7535\u8BDD\u53EB\u7535\u5DE5\u8FC7\u6765\uFF0C\u7535\u5DE5\u9996\u5148\u4F1A\u548C\u6211\u4EEC\u6C9F\u901A\u4E0B\u5927\u81F4\u60C5\u51B5\uFF0C\u770B\u770B\u95EE\u9898\u5927\u81F4\u7684\u65B9\u5411\u548C\u53EF\u80FD\uFF0C\u7136\u540E\u518D\u4F7F\u7528\u4E07\u7528\u8868\u53CA\u5176\u4ED6\u4E13\u4E1A\u68C0\u6D4B\u5DE5\u5177\u5BF9\u7535\u8DEF\u9010\u6BB5\u8FDB\u884C\u68C0\u6D4B\uFF0C\u6700\u540E\u518D\u627E\u5230\u5F02\u5E38\u60C5\u51B5\u7684\u90E8\u5206\uFF0C\u8FDB\u884C\u76F8\u5E94\u7EF4\u4FEE\u6216\u90E8\u4EF6\u66F4\u6362\u3002</p><p>\u6211\u4EEC\u5728\u8FDB\u884C\u7A0B\u5E8F\u8C03\u8BD5\uFF08debug\uFF09\u65F6\u4E5F\u5E94\u8BE5\u9075\u5FAA\u7C7B\u4F3C\u7684\u601D\u8DEF\u8FDB\u884C\uFF1A</p><ol><li>\u7406\u6E05\u9700\u6C42\uFF0C <strong>\u89C2\u5BDF\u6545\u969C\u63D0\u793A\u3001\u73B0\u8C61</strong> \uFF0C\u770B\u662F\u5426\u80FD\u786E\u5B9A\u95EE\u9898\u5927\u81F4\u65B9\u5411\u548C\u53EF\u80FD</li><li>\u9605\u8BFB\u4EE3\u7801</li><li>\u9010\u6761\u8BED\u53E5\u6267\u884C\u7A0B\u5E8F</li><li>\u89C2\u5BDF\u7A0B\u5E8F\u6267\u884C\u60C5\u51B5</li><li>\u53D1\u73B0\u95EE\u9898</li><li>\u89E3\u51B3\u95EE\u9898</li></ol><h2 id="\u8C03\u8BD5\u65B9\u5F0F" tabindex="-1">\u8C03\u8BD5\u65B9\u5F0F <a class="header-anchor" href="#\u8C03\u8BD5\u65B9\u5F0F" aria-hidden="true">#</a></h2><p>\u8C03\u8BD5\u601D\u8DEF\u638C\u63E1\u4E4B\u540E\uFF0C\u8FD8\u6709\u4E00\u4E9B\u914D\u5957\u7684\u8C03\u8BD5\u65B9\u5F0F\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u5FEB\u901F\u5B9A\u4F4D\u53CA\u4FEE\u590D bug\u3002</p><h3 id="\u5C0F\u9EC4\u9E2D\u8C03\u8BD5\u6CD5" tabindex="-1">\u5C0F\u9EC4\u9E2D\u8C03\u8BD5\u6CD5 <a class="header-anchor" href="#\u5C0F\u9EC4\u9E2D\u8C03\u8BD5\u6CD5" aria-hidden="true">#</a></h3><div class="tip custom-block"><p class="custom-block-title">\u5C0F\u9EC4\u9E2D\u8C03\u8BD5\u6CD5</p><p>\u5C0F\u9EC4\u9E2D\u8C03\u8BD5\u6CD5\uFF08\u53C8\u79F0\u6A61\u76AE\u9E2D\u8C03\u8BD5\u6CD5\uFF0C\u9EC4\u9E2D\u9664\u866B\u6CD5\uFF09\u662F\u8F6F\u4EF6\u5DE5\u7A0B\u4E2D\u4F7F\u7528\u7684\u8C03\u8BD5\u4EE3\u7801\u65B9\u6CD5\u4E4B\u4E00\u3002</p><p>\u6B64\u6982\u5FF5\u662F\u53C2\u7167\u4E8E\u4E00\u4E2A\u6765\u81EA\u300A\u7A0B\u5E8F\u5458\u4FEE\u70BC\u4E4B\u9053\u300B\u4E66\u4E2D\u7684\u4E00\u4E2A\u6545\u4E8B\u3002\u4F20\u8BF4\u4E2D\u7A0B\u5E8F\u5927\u5E08\u968F\u8EAB\u643A\u5E26\u4E00\u53EA\u5C0F\u9EC4\u9E2D\uFF0C\u5728\u8C03\u8BD5\u4EE3\u7801\u7684\u65F6\u5019\u4F1A\u5728\u684C\u4E0A\u653E\u4E0A\u8FD9\u53EA\u5C0F\u9EC4\u9E2D\uFF0C\u7136\u540E\u8BE6\u7EC6\u5730\u5411\u9E2D\u5B50\u89E3\u91CA\u6BCF\u884C\u4EE3\u7801[2]</p><p>\u8BB8\u591A\u7A0B\u5E8F\u5458\u90FD\u6709\u8FC7\u5411\u522B\u4EBA\uFF08\u751A\u81F3\u53EF\u80FD\u5411\u5B8C\u5168\u4E0D\u4F1A\u7F16\u7A0B\u7684\u4EBA\uFF09\u63D0\u95EE\u53CA\u89E3\u91CA\u7F16\u7A0B\u95EE\u9898\uFF0C\u5C31\u5728\u89E3\u91CA\u7684\u8FC7\u7A0B\u4E2D\u51FB\u4E2D\u4E86\u95EE\u9898\u7684\u89E3\u51B3\u65B9\u6848\u3002\u4E00\u8FB9\u9610\u8FF0\u4EE3\u7801\u7684\u610F\u56FE\u4E00\u8FB9\u89C2\u5BDF\u5B83\u5B9E\u9645\u4E0A\u7684\u610F\u56FE\u5E76\u505A\u8C03\u8BD5\uFF0C\u8FD9\u4E24\u8005\u4E4B\u95F4\u7684\u4EFB\u4F55\u4E0D\u534F\u8C03\u4F1A\u53D8\u5F97\u5F88\u660E\u663E\uFF0C\u5E76\u4E14\u66F4\u5BB9\u6613\u53D1\u73B0\u81EA\u5DF1\u7684\u9519\u8BEF\u3002\u5982\u679C\u6CA1\u6709\u73A9\u5177\u5C0F\u9E2D\u5B50\u4E5F\u53EF\u4EE5\u8003\u8651\u5411\u5176\u5B83\u4E1C\u897F\u503E\u8BC9\uFF0C\u6BD4\u5982\u684C\u4E0A\u7684\u82B1\u82B1\u8349\u8349\uFF0C\u952E\u76D8\u9F20\u6807\u3002</p><p>\u7C7B\u4F3C\u7684\uFF0C\u6709\u4E00\u79CD\u73B0\u8C61\u53EB\u505A cone of answers\uFF0C\u8FD9\u662F\u4E00\u4E2A\u5E38\u89C1\u7684\u73B0\u8C61\u3002 <strong>\u4F60\u7684\u670B\u53CB\u8DD1\u6765\u95EE\u4F60\u4E00\u4E2A\u95EE\u9898\uFF0C\u4F46\u662F\u5F53\u4ED6\u81EA\u5DF1\u628A\u95EE\u9898\u8BF4\u5B8C\uFF0C\u6216\u8005\u8BF4\u5230\u4E00\u534A\u7684\u65F6\u5019\u5C31\u60F3\u51FA\u4E86\u7B54\u6848\u8D70\u4E86\uFF0C\u7559\u4E0B\u4E00\u8138\u832B\u7136\u7684\u4F60\u3002\u662F\u7684\uFF0C\u8FD9\u4E2A\u65F6\u5019\u4F60\u5C31\u8D77\u5230\u4E86\u90A3\u53EA\u5C0F\u9EC4\u9E2D\u7684\u4F5C\u7528</strong> \u3002</p><p>\u76F8\u4F3C\u7684\u6982\u5FF5\u8FD8\u6709\u4E0D\u5C11\uFF0C\u4F8B\u5982\u81EA\u767D\u8C03\u8BD5\u3001\u7EB8\u677F\u7A0B\u5E8F\u5458\u6216\u7A0B\u5E8F\u5458\u7684\u5047\u4EBA\u3001\u60F3\u51FA\u8111\u5916\u7B49\u7B49\u3002\u603B\u7684\u6765\u8BF4\uFF0C\u5728\u4F60\u8BD5\u56FE\u8868\u8FF0\u81EA\u5DF1\u7684\u60F3\u6CD5\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u81EA\u7136\u5730\u5728\u4FC3\u4F7F\u81EA\u5DF1\u53BB\u6574\u7406\u601D\u8DEF\uFF0C\u91CD\u65B0\u8003\u8651\u95EE\u9898\u3002[3]</p></div><p>\u5C0F\u9EC4\u9E2D\u8C03\u8BD5\u6CD5\u662F\u4E00\u79CD\u975E\u5E38\u7ECF\u5178\u7684\u4EE3\u7801\u9605\u8BFB\u6280\u5DE7\u3002\u4E00\u8FB9\u8BFB\u4EE3\u7801\uFF0C\u4E00\u8FB9\u7ED9\u81EA\u5DF1\u6216\u5176\u4ED6\u7684\u5A92\u4ECB\u6765\u89E3\u91CA\u5BF9\u5E94\u4EE3\u7801\u7684\u542B\u4E49\u3002\u6709\u4E9B\u7B80\u5355\u7684\u95EE\u9898\uFF0C\u5C31\u8FD9\u4E48\u88AB\u53D1\u73B0\u4E86\u3002</p><p><img src="'+B+`" alt="202010081752687"></p><h3 id="\u8F93\u51FA\u8BED\u53E5" tabindex="-1">\u8F93\u51FA\u8BED\u53E5 <a class="header-anchor" href="#\u8F93\u51FA\u8BED\u53E5" aria-hidden="true">#</a></h3><p>\u5355\u7EAF\u901A\u8FC7\u4EE3\u7801\u9605\u8BFB\uFF0C\u5982\u679C\u662F\u5355\u8BCD\u7C7B\u9519\u8BEF\uFF08\u5355\u8BCD\u9519\u8BEF\u662F\u524D\u671F\u5B66\u4E60\u8FC7\u7A0B\u4E2D\uFF0C\u51FA\u73B0\u9891\u6B21\u6700\u9AD8\u7684\uFF09\u3002\u4EE5\u6211\u4EEC\u7A0B\u5E8F\u5458\u8FD9\u4E48 &quot;\u62A4\u728A\u5B50&quot; \u7684\u60C5\u51B5\uFF0C\u6709\u65F6\u5019\u770B\u591A\u5C11\u904D\u90FD\u770B\u4E0D\u51FA\u6765\u3002<em>&quot;\u6211\u7684\u4EE3\u7801\u548C\u4ED6\u7684\u4E00\u6837\uFF0C\u6211\u7684\u4EE3\u7801\u6CA1\u9519\u554A\uFF1F\u600E\u4E48\u5C31\u662F\u4E0D\u884C\uFF1F&quot;</em></p><p>\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u5C31\u9700\u8981\u6211\u4EEC\u5728\u7A0B\u5E8F\u6267\u884C\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u627E\u5BFB\u4E00\u4E9B\u5173\u952E\u7684\u5730\u65B9\u589E\u52A0\u8F93\u51FA\u8BED\u53E5\uFF0C\u7136\u540E\u6267\u884C\u770B\u8F93\u51FA\u6548\u679C\u3002\u5982\u679C\u8F93\u51FA\u8BED\u53E5\u548C\u9884\u671F\u6548\u679C\u4E0D\u5BF9\uFF0C\u751A\u81F3\u5E72\u8106\u6CA1\u6709\u6267\u884C\uFF0C\u90A3\u95EE\u9898\u5F88\u5927\u53EF\u80FD\u5C31\u51FA\u5728\u8FD9\u91CC\u4E86\u3002</p><h3 id="\u4E13\u4E1A\u8C03\u8BD5\u5DE5\u5177-\u91CD\u8981" tabindex="-1">\u4E13\u4E1A\u8C03\u8BD5\u5DE5\u5177[\u91CD\u8981] <a class="header-anchor" href="#\u4E13\u4E1A\u8C03\u8BD5\u5DE5\u5177-\u91CD\u8981" aria-hidden="true">#</a></h3><p>\u901A\u8FC7\u9605\u8BFB\u4EE3\u7801\u3001\u52A0\u8F93\u51FA\u8BED\u53E5\u6765\u67E5\u627E\u7A0B\u5E8F\u9519\u8BEF\uFF0C\u524D\u671F\u56FA\u7136\u53EF\u884C\u3002\u4F46\u662F\u5F53\u7A0B\u5E8F\u7ED3\u6784\u8D8A\u6765\u8D8A\u590D\u6742\u65F6\uFF0C\u6216\u8005\u82B1\u8D39\u4E86\u5927\u91CF\u65F6\u95F4\u4F9D\u7136\u6CA1\u6709\u80FD\u591F\u53D1\u73B0\u53CA\u89E3\u51B3\u95EE\u9898\u65F6\uFF0C\u8FD8\u9700\u8981\u914D\u5408\u4E13\u4E1A\u7684 debug \u5DE5\u5177\u6765\u8C03\u8BD5\u3002</p><p>\u5728 JDK \u4E2D\u5185\u7F6E\u4E86 <code>jdb</code> \u53EF\u4EE5\u7528\u6765\u5728\u547D\u4EE4\u884C\u8C03\u8BD5\u7A0B\u5E8F\uFF0C\u4F46\u662F\u6211\u4EEC\u73B0\u5728\u5728\u7528 Eclipse \u8FD9\u79CD IDE \uFF0C\u4EBA\u5BB6\u4E5F\u643A\u5E26\u4E86\u76F8\u5E94\u7684\u8C03\u8BD5\u7A0B\u5E8F\u3002\u547D\u4EE4\u884C\u548C\u53EF\u89C6\u5316\u754C\u9762\u8FD9\u79CD\u9009\u62E9\uFF0C\u6BEB\u65E0\u7591\u95EE\u8981\u9009\u62E9\u540E\u8005\u3002</p><h2 id="eclipse\u8C03\u8BD5" tabindex="-1">Eclipse\u8C03\u8BD5 <a class="header-anchor" href="#eclipse\u8C03\u8BD5" aria-hidden="true">#</a></h2><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u901A\u8FC7\u4E00\u4E2A\u6848\u4F8B\u6765\u6F14\u793A\u4E00\u4E0B\u5177\u4F53 Eclipse \u4E2D\u8C03\u8BD5\u5DE5\u5177\u7684\u4F7F\u7528\u6B65\u9AA4\u3002</p><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1">\u95EE\u9898\u63CF\u8FF0 <a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a></h3><p><strong>\u6848\u4F8B\u9700\u6C42\uFF1A\u8F93\u51FA 1 ~ 5 \u8FD95\u4E2A\u6570\u5B57\u3002</strong></p><p><strong>\u4EE3\u7801\u5B9E\u73B0\uFF1A</strong></p><div class="language-java line-numbers-mode"><button class="copy"></button><span class="lang">java</span><pre class="vp-code-dark"><code><span class="line"><span style="color:#C678DD;">int</span><span style="color:#E06C75;"> i </span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;">System</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">out</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">println</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;\u7A0B\u5E8F\u8C03\u8BD5\u6F14\u793A\uFF0C\u6CE8\u610F\u89C2\u5BDF i \u7684\u503C\uFF1A&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#C678DD;">while</span><span style="color:#E06C75;">(i </span><span style="color:#56B6C2;">&lt;</span><span style="color:#E06C75;"> </span><span style="color:#D19A66;">5</span><span style="color:#E06C75;">){</span></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#E5C07B;">System</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">out</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">println</span><span style="color:#ABB2BF;">(i);</span></span>
<span class="line"><span style="color:#E06C75;">    i</span><span style="color:#ABB2BF;">++;</span></span>
<span class="line"><span style="color:#E06C75;">}</span></span>
<span class="line"></span></code></pre><pre class="vp-code-light"><code><span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u7A0B\u5E8F\u8C03\u8BD5\u6F14\u793A\uFF0C\u6CE8\u610F\u89C2\u5BDF i \u7684\u503C\uFF1A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">while</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">    System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    i</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>\u5B58\u5728\u95EE\u9898\uFF1A</strong> \u53EA\u80FD\u8F93\u51FA\u52304\uFF0C\u65E0\u6CD5\u8F93\u51FA5\u8FD9\u4E2A\u6570</p><p><img src="`+A+'" alt="202010081755202"></p><h3 id="\u4F7F\u7528\u6B65\u9AA4" tabindex="-1">\u4F7F\u7528\u6B65\u9AA4 <a class="header-anchor" href="#\u4F7F\u7528\u6B65\u9AA4" aria-hidden="true">#</a></h3><p>\u7A0B\u5E8F\u8FD0\u884C\u55D6\u55D6\u7684\uFF0C\u6211\u4EEC\u6839\u672C\u65E0\u6CD5\u9010\u884C\u7684\u89C2\u5BDF\u5177\u4F53\u771F\u5B9E\u7684\u6267\u884C\u8FC7\u7A0B\uFF0CEclipse \u7684\u7A0B\u5E8F\u8C03\u8BD5\uFF08debug\uFF09\u53C8\u88AB\u79F0\u4E3A\u65AD\u70B9\u8C03\u8BD5\u3002\u6240\u8C13\u65AD\u70B9\uFF0C\u5C31\u662F\u4F60\u5E0C\u671B\u8FD0\u884C\u4E2D\u7684\u7A0B\u5E8F\u5728\u54EA\u4E00\u884C\u505C\u4E0B\u6765\uFF0C\u8BA9\u4F60\u53EF\u4EE5\u9010\u884C\u8FDB\u884C\u5206\u6790\u3002</p><p><strong>\u7B2C\u4E00\u6B65\uFF1A\u770B\u6545\u969C\u73B0\u8C61\uFF0C\u5206\u6790\u9519\u8BEF\uFF0C\u8BBE\u7F6E\u65AD\u70B9\u3002</strong></p><p>\u5728\u4F60\u60F3\u76D1\u6D4B\u7A0B\u5E8F\u8FD0\u884C\u7684\u5F00\u59CB\u4EE3\u7801\u884C\u5DE6\u4FA7\u680F\uFF0C\u53CC\u51FB\u9F20\u6807\u5DE6\u952E\u5C06\u51FA\u73B0\u4E00\u4E2A\u65AD\u70B9\u6807\u5FD7\uFF0C\u518D\u53CC\u51FB\u53EF\u4EE5\u53D6\u6D88\u65AD\u70B9\u3002</p><p><img src="'+v+'" alt="202010081755352"></p><p><strong>\u7B2C\u4E8C\u6B65\uFF1A\u542F\u52A8\u8C03\u8BD5\u3002</strong></p><p>\u8FD9\u65F6\u5019\uFF0C\u6211\u4EEC\u4E0D\u518D\u4EE5 <code>run as</code> \u8FD0\u884C\u4E86\uFF0C\u800C\u662F\u53F3\u952E\u4EE5 <code>debug as</code> \u8FD0\u884C\u3002</p><p>\u542F\u52A8\u65F6\uFF0CEclipse \u4F1A\u5F39\u51FA\u4E00\u4E2A\u5BF9\u8BDD\u6846\u63D0\u793A\u4F60\u662F\u5426\u8981\u5207\u6362\u5230 debug \u6A21\u5F0F\u89C6\u56FE\uFF0C\u6211\u4EEC\u70B9\u51FB switch \u5207\u6362\u8FC7\u53BB\uFF0Cdebug as \u8FD0\u884C\u540E\uFF0C\u5B83\u4F1A\u6309\u7167\u6B63\u5E38\u7684\u6267\u884C\u987A\u5E8F\u8FDB\u884C\u4EE3\u7801\u6267\u884C\uFF0C\u76F4\u5230\u9047\u5230\u65AD\u70B9\u884C\u624D\u505C\u4E0B\u6765\u3002\u6B64\u65F6\u8FD9\u4E00\u884C\u4EE3\u7801\u5904\u4E8E <strong>\u7B49\u5F85\u6267\u884C</strong> \uFF0C\u8FD8\u672A\u6267\u884C\u7684\u72B6\u6001\u3002</p><p><img src="'+E+'" alt="202010081755573"></p><p>debug \u89C6\u56FE\u7684\u754C\u9762\u5E03\u5C40\u5982\u4E0B\uFF1A</p><p><img src="'+k+'" alt="202010081755606"></p><p><strong>\u7B2C\u4E09\u6B65\uFF1A\u5355\u6B65\u8FD0\u884C\u3002</strong></p><p>\u8FDE\u7EED\u70B9\u51FB F6 \u952E\u53EF\u4EE5\u5355\u6B65\u8FD0\u884C\u7A0B\u5E8F\uFF0C\u5373\u9010\u884C\u6267\u884C\u7A0B\u5E8F\uFF0C\u8FD9\u65F6\u5019\u6211\u4EEC\u5C31\u53EF\u4EE5\u6765\u89C2\u5BDF\u7A0B\u5E8F\u8FD0\u884C\u8FC7\u7A0B\u4E86\u3002</p><p><img src="'+x+'" alt="202010081755712"></p><p><strong>\u7B2C\u56DB\u6B65\uFF1A\u89C2\u5BDF\u53D8\u91CF\u53D8\u5316\u3002</strong></p><p>\u5728\u9010\u884C\u8FD0\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u53EF\u4EE5\u89C2\u5BDF\u53F3\u4FA7\u53D8\u91CF\u8868\u6765\u67E5\u770B\u53D8\u91CF\u7684\u53D8\u5316\u60C5\u51B5\uFF0C\u9F20\u6807\u76F4\u63A5\u653E\u5728\u53D8\u91CF\u540D\u4E0A\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u67E5\u770B\u5B83\u7684\u5F53\u524D\u503C\u3002</p><p>\u9009\u4E2D\u8868\u8FBE\u5F0F\u8FD8\u53EF\u4EE5\u67E5\u770B\u8868\u8FBE\u5F0F\u7684\u8BA1\u7B97\u7ED3\u679C\u3002</p><p><img src="'+q+'" alt="202010081755798"></p><p><strong>\u5176\u4ED6\u8C03\u8BD5\u6309\u94AE\u7684\u4F7F\u7528\uFF1A</strong></p><p>\u6211\u4EEC\u53EF\u4EE5\u6309\u4E0B F8 \uFF0C\u6309\u4E0B\u5B83\uFF0C\u4F1A\u5411\u4E0B\u5FEB\u901F\u6267\u884C\u4EE3\u7801\u884C\u5230\u4E0B\u4E2A\u65AD\u70B9\u624D\u4F1A\u505C\u4F4F\u3002\u8FD9\u6837\u6211\u4EEC\u5C31\u53EF\u4EE5\u53EA\u89C2\u5BDF\u60F3\u8981\u770B\u5230\u7684\u4EE3\u7801\u884C\u6548\u679C\u4E86\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u7B14\u8005\u8BF4</p><p>\u5728\u8FD0\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u968F\u65F6\u53EF\u4EE5\u6DFB\u52A0\u65AD\u70B9\u6216\u53D6\u6D88\u65AD\u70B9\uFF0C\u975E\u5E38\u7075\u6D3B\u3002</p></div><p>\u6211\u4EEC\u4E5F\u53EF\u4EE5\u6309\u4E0B Ctrl + F2 \u968F\u65F6\u7ED3\u675F\u5F53\u524D\u7684\u8C03\u8BD5\u3002</p><p><img src="'+w+'" alt="202010081756376"></p><p>\u597D\u4E86\uFF0C\u6211\u4EEC\u6700\u540E\u5B8C\u6574\u8C03\u8BD5\u4E00\u4E0B\u5427\uFF0C\u8C03\u8BD5\u5230\u6700\u540E\u73AF\u8282\u65F6\uFF0C\u5F88\u5BB9\u6613\u5C31\u53D1\u73B0 <code>i</code> \u7684\u503C\u5230\u4E865\u7684\u65F6\u5019\uFF0C\u5C31\u65E0\u6CD5\u8FDB\u5165\u5FAA\u73AF\u4E86\uFF0C\u95EE\u9898\u5C31\u51FA\u5728\u8FD9\uFF0C\u6539\u52A8\u6761\u4EF6\u8868\u8FBE\u5F0F\u4E3A <code>i &lt;= 5</code> \u5C31\u6CA1\u4E8B\u4E86\u3002</p><p>\u8C03\u8BD5\u5B8C\u4E4B\u540E\uFF0C\u4F60\u53EF\u4EE5\u5728\u53F3\u4FA7 \u65AD\u70B9\u8868 \u5FEB\u901F\u6E05\u9664\u6240\u6709\u7684\u65AD\u70B9\uFF0C\u7136\u540E\u518D\u70B9\u51FB\u53F3\u4E0A\u89D2\u7684 Java \u89C6\u56FE\u6807\u5FD7\u5207\u6362\u56DE\u4E4B\u524D\u7684\u5F00\u53D1\u6A21\u5F0F\u3002</p><p><img src="'+j+'" alt="202010081756666"></p><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1">\u53C2\u8003\u6587\u732E <a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a></h2><p>[1]\u767E\u5EA6\u767E\u79D1. bug \uFF08\u8BA1\u7B97\u673A\u9886\u57DF\u6F0F\u6D1E\uFF09[EB/OL]. <a href="https://baike.baidu.com/item/bug/3353935" target="_blank" rel="noreferrer">https://baike.baidu.com/item/bug/3353935</a>. 2020-1-13</p><p>[2]\u767E\u5EA6\u5B66\u672F. The Pragmatic programmer:From journeyman to master[EB/OL]. <a href="https://xueshu.baidu.com/usercenter/paper/show?paperid=1971af4403d863660114ff571f6757a5&amp;site=xueshu_se" target="_blank" rel="noreferrer">https://xueshu.baidu.com/usercenter/paper/show?paperid=1971af4403d863660114ff571f6757a5&amp;site=xueshu_se</a>. 2021-1-13</p><p>[3]\u767E\u5EA6\u767E\u79D1. \u5C0F\u9EC4\u9E2D\u8C03\u8BD5\u6CD5[EB/OL]. <a href="https://baike.baidu.com/item/%E5%B0%8F%E9%BB%84%E9%B8%AD%E8%B0%83%E8%AF%95%E6%B3%95/16569594" target="_blank" rel="noreferrer">https://baike.baidu.com/item/\u5C0F\u9EC4\u9E2D\u8C03\u8BD5\u6CD5/16569594</a>. 2021-1-13</p><h2 id="\u540E\u8BB0" tabindex="-1">\u540E\u8BB0 <a class="header-anchor" href="#\u540E\u8BB0" aria-hidden="true">#</a></h2><p>\u5728\u672C\u7BC7\u4E2D\uFF0C\u7B14\u8005\u8BD5\u7740\u6DFB\u52A0\u4E86\u4E00\u4E9B\u52A8\u6001 gif \u56FE\u6765\u66F4\u597D\u7684\u5C55\u73B0\u4E00\u4E9B\u64CD\u4F5C\u6B65\u9AA4\uFF0C\u5E0C\u671B\u5B83\u4EEC\u5BF9\u4F60\u6709\u5E2E\u52A9\uFF0C\u4E5F\u5E0C\u671B\u4F60\u80FD\u770B\u61C2\u8FD9\u65E0\u58F0\u7684\u201C\u5BF9\u767D\u201D\u3002</p><p>\u672C\u7BC7\u4E5F\u662F\u7B14\u8005\u8BED\u8A00\u5165\u95E8\u7CFB\u5217\u7684\u7B2C\u4E00\u4E2A\u7A0B\u5E8F\u8C03\u8BD5\u4F7F\u7528\uFF0C\u53EA\u662F\u5165\u95E8\u64CD\u4F5C\u800C\u5DF2\uFF0C\u540E\u7EED\u968F\u7740\u7CFB\u5217\u7684\u5EF6\u7EED\uFF0C\u518D\u8865\u5145\u66F4\u591A\u7684\u4F7F\u7528\u6280\u5DE7\u4EE5\u53CA\u5176\u4ED6\u8C03\u8BD5\u6309\u94AE\u7684\u529F\u80FD\u3002</p><p>\u5E0C\u671B\u4F60\u4ECE\u73B0\u5728\u5F00\u59CB\u597D\u597D\u7528\u7528\u6BCF\u4E2A IDE \u7684\u7A0B\u5E8F\u8C03\u8BD5\u5DE5\u5177\uFF0C\u7EDD\u5BF9\u6BD4\u4F60\u9047\u5230\u95EE\u9898\u6216\u601D\u8DEF\u4E0D\u7545\u65F6\uFF0C\u53EA\u9760\u773C\u775B\u77AA\u4EE3\u7801\u6709\u6548\u3002</p><p><img src="'+S+'" alt="202010081756767"></p><div class="info custom-block"><p class="custom-block-title">\u7B14\u8005\u8BF4</p><p>\u5BF9\u4E8E\u6280\u672F\u7684\u5B66\u4E60\uFF0C\u7B14\u8005\u4E00\u8D2F\u9075\u5FAA\u7684\u6B65\u9AA4\u662F\uFF1A\u5148\u7528\u6700\u6700\u7B80\u5355\u7684 demo \u8BA9\u5B83\u8DD1\u8D77\u6765\uFF0C\u7136\u540E\u5B66\u5B66\u5B83\u7684\u6700\u6700\u5E38\u7528 API \u548C \u914D\u7F6E\u8BA9\u81EA\u5DF1\u80FD\u7528\u8D77\u6765\uFF0C\u6700\u540E\u719F\u7EC3\u4F7F\u7528\u7684\u57FA\u7840\u4E0A\uFF0C\u5728\u7A7A\u95F2\u65F6\u5C1D\u8BD5\u9605\u8BFB\u5B83\u7684\u6E90\u7801\u8BA9\u81EA\u5DF1\u80FD\u591F\u6D1E\u5F7B\u5B83\u7684\u8FD0\u884C\u673A\u5236\uFF0C\u90E8\u5206\u95EE\u9898\u51FA\u73B0\u7684\u539F\u56E0\uFF0C\u540C\u65F6\u501F\u9274\u8FD9\u4E9B\u6280\u672F\u5B9E\u73B0\u6765\u63D0\u5347\u81EA\u5DF1\u7684\u4EE3\u7801\u9AD8\u5EA6\u3002</p><p>\u6240\u4EE5\u5728\u7B14\u8005\u7684\u6587\u7AE0\u4E2D\uFF0C\u524D\u671F\u57FA\u672C\u90FD\u662F\u5C0F\u767D\u6587\uFF0C\u4EC5\u4EC5\u7A7F\u63D2\u5F88\u5C11\u91CF\u7684\u6E90\u7801\u7814\u7A76\u3002\u5F53\u7136\u7B49\u5C0F\u767D\u6587\u66F4\u65B0\u591A\u4E86\uFF0C\u4F60\u4EEC\u8FD8\u4F9D\u7136\u559C\u6B22\uFF0C\u540E\u671F\u4F1A\u4E0D\u5B9A\u65F6\u4E13\u95E8\u5BF9\u90E8\u5206\u6280\u672F\u7684\u6E90\u7801\u8FDB\u884C\u89E3\u6790\u3002</p></div>',72);function N(s,V,$,O,P,G){const o=c,r=b("ClientOnly");return l(),d("div",null,[T,u(r,null,{default:g(()=>{var a,e,p,n;return[((e=(a=s.$frontmatter)==null?void 0:a.aside)!=null?e:!0)&&((n=(p=s.$frontmatter)==null?void 0:p.showArticleMetadata)!=null?n:!0)?(l(),y(o,{key:0,article:s.$frontmatter},null,8,["article"])):_("",!0)]}),_:1}),I])}const H=i(J,[["render",N]]);export{U as __pageData,H as default};
