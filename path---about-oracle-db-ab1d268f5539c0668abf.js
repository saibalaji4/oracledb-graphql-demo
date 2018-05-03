webpackJsonp([0xace66050891f],{1955:function(n,s){n.exports={data:{postBySlug:{html:'<a href="https://livesql.oracle.com" target="_blank">\n<img alt="oracle database logo" src="oracle-database-logo.png" width="80%" style="display:block;margin:auto;"/>\n</a>\n<h4 id="our-apps-rdbs-schema"><a href="#our-apps-rdbs-schema" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Our Apps RDBS Schema</h4>\n<p>This schema might look slightly different than the one in\n<a href="/about-graphql">About GraphLQ</a> but don\'t be alarmed! This is just how the database sees the data\n<em>but</em> this defines the <em>same schema</em>. The only difference here is the language behind the definitions.\nOracle Database uses <code class="language-text">SQL</code> which is the gold-standard of data definition and manipulation languages. </p>\n<p><code class="language-text">SQL</code> has an interesting history. It was originally designed by IBM to facilitate interaction with relational data,\nand named <em>SEQUEL</em> (<em>Structured English Query Language</em>). It wasn\'t until Relational Software, Inc (now Oracle) developed their\ndatabase (Oracle Database) that the language took off! [<a href="https://en.wikipedia.org/wiki/SQL#History">4</a>]</p>\n<blockquote>\n<p>from <a href="https://github.com/unofficialoraclecloudhub/oracledb-graphql-demo/blob/master/Docker/db/oracle-sql/02-demo-data-oracle.sql">02-demo-data-oracle.sql</a></p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code class="language-sql">  <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token string">"GRAPHQL"</span><span class="token punctuation">.</span><span class="token string">"ACCOUNTS"</span> \n   <span class="token punctuation">(</span>\t\n    <span class="token string">"ID"</span> NUMBER<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> \n\t<span class="token string">"EMAIL_ADDRESS"</span> VARCHAR2<span class="token punctuation">(</span><span class="token number">26</span> BYTE<span class="token punctuation">)</span><span class="token punctuation">,</span> \n\t<span class="token string">"FIRST_NAME"</span> VARCHAR2<span class="token punctuation">(</span><span class="token number">26</span> BYTE<span class="token punctuation">)</span><span class="token punctuation">,</span> \n\t<span class="token string">"LAST_NAME"</span> VARCHAR2<span class="token punctuation">(</span><span class="token number">26</span> BYTE<span class="token punctuation">)</span><span class="token punctuation">,</span> \n\t<span class="token string">"NUM_LEGS"</span> NUMBER<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> \n\t<span class="token string">"CREATED_AT"</span> NUMBER<span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token number">0</span>\n   <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  \n  <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token string">"GRAPHQL"</span><span class="token punctuation">.</span><span class="token string">"COMMENTS"</span> \n   <span class="token punctuation">(</span>\t\n    <span class="token string">"ID"</span> NUMBER<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> \n\t<span class="token string">"BODY"</span> VARCHAR2<span class="token punctuation">(</span><span class="token number">128</span> BYTE<span class="token punctuation">)</span><span class="token punctuation">,</span> \n\t<span class="token string">"POST_ID"</span> NUMBER<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> \n\t<span class="token string">"AUTHOR_ID"</span> NUMBER<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> \n\t<span class="token string">"ARCHIVED"</span> NUMBER<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> \n\t<span class="token string">"CREATED_AT"</span> NUMBER<span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token number">0</span>\n   <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token string">"GRAPHQL"</span><span class="token punctuation">.</span><span class="token string">"LIKES"</span> \n   <span class="token punctuation">(</span>\t\n    <span class="token string">"ACCOUNT_ID"</span> NUMBER<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> \n\t<span class="token string">"COMMENT_ID"</span> NUMBER<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> \n\t<span class="token string">"CREATED_AT"</span> NUMBER<span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>\n   <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token string">"GRAPHQL"</span><span class="token punctuation">.</span><span class="token string">"POSTS"</span> \n   <span class="token punctuation">(</span>\t\n    <span class="token string">"ID"</span> NUMBER<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> \n\t<span class="token string">"BODY"</span> VARCHAR2<span class="token punctuation">(</span><span class="token number">1024</span> BYTE<span class="token punctuation">)</span><span class="token punctuation">,</span> \n\t<span class="token string">"AUTHOR_ID"</span> NUMBER<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> \n\t<span class="token string">"ARCHIVED"</span> NUMBER<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> \n\t<span class="token string">"CREATED_AT"</span> NUMBER<span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token number">0</span>\n   <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token string">"GRAPHQL"</span><span class="token punctuation">.</span><span class="token string">"RELATIONSHIPS"</span> \n   <span class="token punctuation">(</span>\t\n    <span class="token string">"FOLLOWER_ID"</span> NUMBER<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> \n\t<span class="token string">"FOLLOWEE_ID"</span> NUMBER<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> \n\t<span class="token string">"CLOSENESS"</span> VARCHAR2<span class="token punctuation">(</span><span class="token number">26</span> BYTE<span class="token punctuation">)</span><span class="token punctuation">,</span> \n\t<span class="token string">"CREATED_AT"</span> NUMBER<span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token number">0</span>\n   <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token string">"GRAPHQL"</span><span class="token punctuation">.</span><span class="token string">"SPONSORS"</span> \n   <span class="token punctuation">(</span>\t\n    <span class="token string">"GENERATION"</span> NUMBER<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> \n\t<span class="token string">"FIRST_NAME"</span> VARCHAR2<span class="token punctuation">(</span><span class="token number">26</span> BYTE<span class="token punctuation">)</span><span class="token punctuation">,</span> \n\t<span class="token string">"LAST_NAME"</span> VARCHAR2<span class="token punctuation">(</span><span class="token number">26</span> BYTE<span class="token punctuation">)</span><span class="token punctuation">,</span> \n\t<span class="token string">"NUM_LEGS"</span> NUMBER<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> \n\t<span class="token string">"CREATED_AT"</span> VARCHAR2<span class="token punctuation">(</span><span class="token number">19</span> BYTE<span class="token punctuation">)</span>\n   <span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h4 id="apis-with-oracledb"><a href="#apis-with-oracledb" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>APIs with OracleDB</h4>\n<p>OracleDB puts no limitations on the type of API you can put on top of it! Actually, Oracle is\none step ahead of you and built <a href="http://www.oracle.com/technetwork/developer-tools/rest-data-services/overview/index.html">Oracle REST Data Services (ORDS)</a>\nto generate modern APIs for your database. </p>',timeToRead:2,excerpt:"Our Apps RDBS Schema This schema might look slightly different than the one in\n About GraphLQ  but don't be alarmed! This is just how the…",frontmatter:{title:"About Oracle DB"}},tableOfContents:{chapters:[{title:"Overview",entries:[{entry:{childMarkdownRemark:{fields:{slug:"/overview"},frontmatter:{title:"Overview"}}}}]},{title:"Running the Demo",entries:[{entry:{childMarkdownRemark:{fields:{slug:"/running-the-demo"},frontmatter:{title:"Running the Demo"}}}},{entry:{childMarkdownRemark:{fields:{slug:"/running-in-the-cloud"},frontmatter:{title:"Running in the Cloud"}}}},{entry:{childMarkdownRemark:{fields:{slug:"/running-with-docker"},frontmatter:{title:"Running with Docker"}}}}]},{title:"GraphQL & Oracle DB?",entries:[{entry:{childMarkdownRemark:{fields:{slug:"/about-graph-ql"},frontmatter:{title:"About GraphQL"}}}},{entry:{childMarkdownRemark:{fields:{slug:"/about-oracle-db"},frontmatter:{title:"About Oracle DB"}}}},{entry:{childMarkdownRemark:{fields:{slug:"/oracle-db-and-graph-ql"},frontmatter:{title:"OracleDB and GraphQL"}}}}]},{title:"Learn More",entries:[{entry:{childMarkdownRemark:{fields:{slug:"/learn-more"},frontmatter:{title:"Learn More"}}}}]},{title:"Summary",entries:[{entry:{childMarkdownRemark:{fields:{slug:"/summary"},frontmatter:{title:"Summary"}}}},{entry:{childMarkdownRemark:{fields:{slug:"/references"},frontmatter:{title:"References"}}}}]}]}},pathContext:{slug:"/about-oracle-db"}}}});
//# sourceMappingURL=path---about-oracle-db-ab1d268f5539c0668abf.js.map