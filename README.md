### Installation

Download & extract or  `git clone`  CodingSkill theme from GitHub to your blog's theme folder, and that's it!
```
$ git clone https://github.com/darpanpathak/hexo-codingskill.git themes/codingskill
```
Once theme is setup, please install peer dependencie as well by running following commands.
```
npm i --save hexo-generator-search hexo-prism-plugin hexo-html-minifier
```

### Enable
Modify the  `theme`  setting in  `_config.yml`  to  `bootstrap-blog`.

### Update
```
cd themes/codingksill
git pull
```
### Sampl Theme Configuration

```
menu:
	Home: index.html
	Archives: archives/
	About: about/
rss: /atom.xml

excerpt_link: Read More
fancybox: true

widgets:
	category: true
	tag: true
	tagcloud: true
	recent_posts: true

show_count: false

# Miscellaneous
google_analytics: UA-XXXXXX-1
gauges_analytics:
favicon: /img/favicon.png
twitter: codingskill
google_plus:
fb_admins:
fb_app_id:

# Disqus Comments Shortname
disqus_shortname: Add Shortname for disqus comment

social:
	facebook: https://www.facebook.com/facebook-pge
	twitter: https://twitter.com/twitter-name
	instagram: http://instagram.com/instagram-name
	github: https://github.com/github-name
	stackoverflow:
	
author:
	facebook: https://www.facebook.com/facebook-username
	twitter: https://twitter.com/twitter-username
	instagram: http://instagram.com/insta-username
	github: https://github.com/github-username
	avatar: https://www.w3schools.com/w3images/avatar2.png

search:
	path: search.json
	field: post
	content: true
```

### Main _config.yml additional configuration
```
theme: codingskill

prism_plugin:
	mode: 'preprocess'  # realtime/preprocess
	theme: 'atom-dark'
	line_number: true

html_minifier:
	collapseBooleanAttributes: true
	collapseWhitespace: true
	ignoreCustomComments: [ !!js/regexp  /^\s*more/]
	removeComments: true
	removeEmptyAttributes: true
	removeScriptTypeAttributes: true
	removeStyleLinkTypeAttributes: true
	minifyJS: true
	minifyCSS: true
```