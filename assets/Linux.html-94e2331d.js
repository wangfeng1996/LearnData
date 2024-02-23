import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as n,a as e}from"./app-282c0a38.js";const i={},l=e(`<h3 id="_1、关机、重启" tabindex="-1"><a class="header-anchor" href="#_1、关机、重启" aria-hidden="true">#</a> 1、关机、重启</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 关机</span>
<span class="token function">shutdown</span> <span class="token parameter variable">-h</span> now
<span class="token comment"># 重启</span>
<span class="token function">shutdown</span> <span class="token parameter variable">-r</span> now
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、查看系统-cpu信息" tabindex="-1"><a class="header-anchor" href="#_2、查看系统-cpu信息" aria-hidden="true">#</a> 2、查看系统,CPU信息</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看系统内核信息</span>
<span class="token function">uname</span> <span class="token parameter variable">-a</span>

<span class="token comment"># 查看系统内核版本</span>
<span class="token function">cat</span> /proc/version

<span class="token comment"># 查看当前用户环境变量</span>
<span class="token function">env</span>

<span class="token function">cat</span> /proc/cpuinfo

<span class="token comment"># 查看有几个逻辑cpu, 包括cpu型号</span>
<span class="token function">cat</span> /proc/cpuinfo <span class="token operator">|</span> <span class="token function">grep</span> name <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-f2</span> -d: <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span>

<span class="token comment"># 查看有几颗cpu,每颗分别是几核</span>
<span class="token function">cat</span> /proc/cpuinfo <span class="token operator">|</span> <span class="token function">grep</span> physical <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span>

<span class="token comment"># 查看当前CPU运行在32bit还是64bit模式下, 如果是运行在32bit下也不代表CPU不支持64bit</span>
getconf LONG_BIT

<span class="token comment"># 结果大于0, 说明支持64bit计算. lm指long mode, 支持lm则是64bit</span>
<span class="token function">cat</span> /proc/cpuinfo <span class="token operator">|</span> <span class="token function">grep</span> flags <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39; lm &#39;</span> <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、建立软连接" tabindex="-1"><a class="header-anchor" href="#_3、建立软连接" aria-hidden="true">#</a> 3、建立软连接</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/jdk1.8/ jdk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4、rpm相关" tabindex="-1"><a class="header-anchor" href="#_4、rpm相关" aria-hidden="true">#</a> 4、rpm相关</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建sshkey</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> your_email@example.com
<span class="token comment">#id_rsa.pub 的内容拷贝到要控制的服务器的 home/username/.ssh/authorized_keys 中,如果没有则新建(.ssh权限为700, authorized_keys权限为600)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、命令重命名" tabindex="-1"><a class="header-anchor" href="#_5、命令重命名" aria-hidden="true">#</a> 5、命令重命名</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在各个用户的.bash_profile中添加重命名配置</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">ll</span><span class="token operator">=</span><span class="token string">&#39;ls -alF&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6、同步服务器时间" tabindex="-1"><a class="header-anchor" href="#_6、同步服务器时间" aria-hidden="true">#</a> 6、同步服务器时间</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> ntpdate <span class="token parameter variable">-u</span> ntp.api.bz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_7、后台运行命令" tabindex="-1"><a class="header-anchor" href="#_7、后台运行命令" aria-hidden="true">#</a> 7、后台运行命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 后台运行,并且有nohup.out输出</span>
<span class="token function">nohup</span> xxx <span class="token operator">&amp;</span>

<span class="token comment"># 后台运行, 不输出任何日志</span>
<span class="token function">nohup</span> xxx <span class="token operator">&gt;</span> /dev/null <span class="token operator">&amp;</span>

<span class="token comment"># 后台运行, 并将错误信息做标准输出到日志中 </span>
<span class="token function">nohup</span> xxx <span class="token operator">&gt;</span>out.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8、强制活动用户退出" tabindex="-1"><a class="header-anchor" href="#_8、强制活动用户退出" aria-hidden="true">#</a> 8、强制活动用户退出</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 命令来完成强制活动用户退出.其中TTY表示终端名称</span>
<span class="token function">pkill</span> <span class="token parameter variable">-kill</span> <span class="token parameter variable">-t</span> <span class="token punctuation">[</span>TTY<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9、查看命令路径" tabindex="-1"><a class="header-anchor" href="#_9、查看命令路径" aria-hidden="true">#</a> 9、查看命令路径</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">which</span> <span class="token operator">&lt;</span>命令<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_10、查看进程所有打开最大fd数" tabindex="-1"><a class="header-anchor" href="#_10、查看进程所有打开最大fd数" aria-hidden="true">#</a> 10、查看进程所有打开最大fd数</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">ulimit</span> <span class="token parameter variable">-n</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_11、配置dns" tabindex="-1"><a class="header-anchor" href="#_11、配置dns" aria-hidden="true">#</a> 11、配置dns</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/resolv.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_12、nslookup-查看域名路由表" tabindex="-1"><a class="header-anchor" href="#_12、nslookup-查看域名路由表" aria-hidden="true">#</a> 12、nslookup,查看域名路由表</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nslookup</span> google.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_13、last-最近登录信息列表" tabindex="-1"><a class="header-anchor" href="#_13、last-最近登录信息列表" aria-hidden="true">#</a> 13、last, 最近登录信息列表</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 最近登录的5个账号</span>
last <span class="token parameter variable">-n</span> <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14、设置固定ip" tabindex="-1"><a class="header-anchor" href="#_14、设置固定ip" aria-hidden="true">#</a> 14、设置固定ip</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ifconfig</span> em1  <span class="token number">192.168</span>.5.177 netmask <span class="token number">255.255</span>.255.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看进程内加载的环境变量" tabindex="-1"><a class="header-anchor" href="#查看进程内加载的环境变量" aria-hidden="true">#</a> 查看进程内加载的环境变量</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 也可以去 cd /proc 目录下, 查看进程内存中加载的东西</span>
<span class="token function">ps</span> eww <span class="token parameter variable">-p</span>  XXXXX<span class="token punctuation">(</span>进程号<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,30),d=[l];function c(r,t){return s(),n("div",null,d)}const u=a(i,[["render",c],["__file","Linux.html.vue"]]);export{u as default};