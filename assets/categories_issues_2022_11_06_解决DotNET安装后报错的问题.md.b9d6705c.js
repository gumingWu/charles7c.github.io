import{_ as i}from"./chunks/ArticleMetadata.b7f9de94.js";import{_ as p,c as r,g as c,w as d,b as e,f as y,a as u,i as m,o as t,e as C,v as g}from"./app.5e486581.js";const h="/assets/202211061520256.90ec4766.png",D="/assets/202211061523521.d4d18d57.png",z=JSON.parse(`{"title":"解决 DotNet 安装完，报错：Couldn't find a valid ICU package installed on the system. Please install libicu using your package manager and try again","description":"","frontmatter":{"title":"解决 DotNet 安装完，报错：Couldn't find a valid ICU package installed on the system. Please install libicu using your package manager and try again","author":"查尔斯","date":"2022/11/06 15:35","categories":["Bug万象集"],"tags":["DotNet","Linux","CentOS"]},"headers":[{"level":2,"title":"问题描述","slug":"问题描述","link":"#问题描述","children":[]},{"level":2,"title":"原因分析","slug":"原因分析","link":"#原因分析","children":[]},{"level":2,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"relativePath":"categories/issues/2022/11/06/解决DotNET安装后报错的问题.md","lastUpdated":1668604952000}`),B={name:"categories/issues/2022/11/06/解决DotNET安装后报错的问题.md"},F=e("h1",{id:"解决-dotnet-安装完-报错-couldn-t-find-a-valid-icu-package-installed-on-the-system-please-install-libicu-using-your-package-manager-and-try-again",tabindex:"-1"},[y("解决 DotNet 安装完，报错：Couldn't find a valid ICU package installed on the system. Please install libicu using your package manager and try again "),e("a",{class:"header-anchor",href:"#解决-dotnet-安装完-报错-couldn-t-find-a-valid-icu-package-installed-on-the-system-please-install-libicu-using-your-package-manager-and-try-again","aria-hidden":"true"},"#")],-1),A=u(`<h2 id="问题描述" tabindex="-1">问题描述 <a class="header-anchor" href="#问题描述" aria-hidden="true">#</a></h2><p><strong>C：</strong> 今天，笔者在一台 CentOS 7.9 服务器上手动安装完 DotNet 6.0.401 并配置好了环境变量之后，照例想查看一下是否安装成功。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">dotnet --version</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">dotnet --version</span></span>
<span class="line"></span></code></pre></div><p>预想的版本信息没输出，倒是输出了这么一段错误。</p><p><img src="`+h+`" alt="202211061520256"></p><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#E06C75;">Process</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">terminated</span><span style="color:#ABB2BF;">. </span><span style="color:#E5C07B;">Couldn</span><span style="color:#98C379;">&#39;t find a valid ICU package installed on the system. Please install libicu using your package manager and try again. Alternatively you can set the configuration flag System.Globalization.Invariant to true if you want to run with no globalization support. Please see https://aka.ms/dotnet-missing-libicu for more information</span><span style="color:#FFFFFF;">.</span></span>
<span class="line"><span style="color:#ABB2BF;">   </span><span style="color:#E5C07B;">at</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">System</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">Environment</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">FailFast</span><span style="color:#ABB2BF;">(System.String)</span></span>
<span class="line"><span style="color:#ABB2BF;">   at System.Globalization.GlobalizationMode+Settings..cctor()</span></span>
<span class="line"><span style="color:#ABB2BF;">   at System.Globalization.CultureData.CreateCultureWithInvariantData()</span></span>
<span class="line"><span style="color:#ABB2BF;">   at System.Globalization.CultureData.get_Invariant()</span></span>
<span class="line"><span style="color:#ABB2BF;">   at System.Globalization.CultureInfo..cctor()</span></span>
<span class="line"><span style="color:#ABB2BF;">   at System.Globalization.CultureInfo.get_CurrentUICulture()</span></span>
<span class="line"><span style="color:#ABB2BF;">   at System.TimeZoneInfo.GetUtcStandardDisplayName()</span></span>
<span class="line"><span style="color:#ABB2BF;">   at System.TimeZoneInfo.CreateUtcTimeZone()</span></span>
<span class="line"><span style="color:#ABB2BF;">   at System.TimeZoneInfo..cctor()</span></span>
<span class="line"><span style="color:#ABB2BF;">   at System.DateTime.get_Now()</span></span>
<span class="line"><span style="color:#ABB2BF;">   at Microsoft.DotNet.Cli.Program.Main(System.String[])</span></span>
<span class="line"><span style="color:#ABB2BF;">Aborted</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">Process terminated</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> Couldn</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">t find a valid ICU package installed on the system. Please install libicu using your package manager and try again. Alternatively you can set the configuration flag System.Globalization.Invariant to true if you want to run with no globalization support. Please see https://aka.ms/dotnet-missing-libicu for more information.</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">at</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">System</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Environment</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">FailFast</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">System.String</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">   at System.Globalization.GlobalizationMode+Settings..cctor</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">   at System.Globalization.CultureData.CreateCultureWithInvariantData</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">   at System.Globalization.CultureData.get_Invariant</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">   at System.Globalization.CultureInfo..cctor</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">   at System.Globalization.CultureInfo.get_CurrentUICulture</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">   at System.TimeZoneInfo.GetUtcStandardDisplayName</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">   at System.TimeZoneInfo.CreateUtcTimeZone</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">   at System.TimeZoneInfo..cctor</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">   at System.DateTime.get_Now</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">   at Microsoft.DotNet.Cli.Program.Main</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">System.String</span><span style="color:#89DDFF;">[])</span></span>
<span class="line"><span style="color:#A6ACCD;">Aborted</span></span>
<span class="line"></span></code></pre></div><h2 id="原因分析" tabindex="-1">原因分析 <a class="header-anchor" href="#原因分析" aria-hidden="true">#</a></h2><p>简单翻译一下关键错误信息。</p><blockquote><p>进程终止。找不到系统上安装的有效 ICU 包。请使用包管理器安装 libicu，然后重试。或者，如果您想在不支持全球化的情况下运行，可以将配置标志 System.Globalization.Invariant 设置为 true。请访问 <a href="https://aka.ms/dotnet-missing-libicu" target="_blank" rel="noreferrer">https://aka.ms/dotnet-missing-libicu</a> 了解更多信息。</p></blockquote><p>从提示信息来看，问题的原因是当前系统没有安装 DotNet 需要的 <code>libicu</code> 库。</p><h2 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-hidden="true">#</a></h2><p>实际上这也是因为笔者采用的手动安装方式才导致的问题，如果采用包管理器（在线）安装方式，这个 <code>libicu</code> 库会自动被安装好，也就不会出现这个问题了。</p><p><img src="`+D+`" alt="202211061523521"></p><p>知道了问题的原因，那就安装一下这个依赖库。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">yum -y install libicu</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">yum -y install libicu</span></span>
<span class="line"></span></code></pre></div><p>安装完后，再执行查看版本命令，版本信息正常输出了。</p><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-hidden="true">#</a></h2><ol><li>在 CentOS 上安装 .NET SDK 或 .NET 运行时：<a href="https://learn.microsoft.com/zh-cn/dotnet/core/install/linux-centos" target="_blank" rel="noreferrer">https://learn.microsoft.com/zh-cn/dotnet/core/install/linux-centos</a></li><li>用于全球化的运行时配置选项：<a href="https://learn.microsoft.com/zh-cn/dotnet/core/runtime-config/globalization" target="_blank" rel="noreferrer">https://learn.microsoft.com/zh-cn/dotnet/core/runtime-config/globalization</a></li></ol>`,18);function f(a,_,b,S,k,v){const l=i,o=m("ClientOnly");return t(),r("div",null,[F,c(o,null,{default:d(()=>{var s,n;return[(((s=a.$frontmatter)==null?void 0:s.aside)??!0)&&(((n=a.$frontmatter)==null?void 0:n.showArticleMetadata)??!0)?(t(),C(l,{key:0,article:a.$frontmatter},null,8,["article"])):g("",!0)]}),_:1}),A])}const T=p(B,[["render",f]]);export{z as __pageData,T as default};
