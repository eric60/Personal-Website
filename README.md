## Jekyll Website
This is my personal website using Jekyll and hosted by Github pages. 
Jekyll is a static site generator that converts a template directory containing html, css, markdown, etc. into a ready to host static website through markdown(a text-to-HTML conversion tool)and a Liquid renderer. This eliminates the need for a backend server or database to hold content. 

Directory Structure 

```
|── _config.yml                                 # site configuration
|── _layouts                           
|   └── default.html                            # default template
|   └── post.html                               # blog post template
|── _posts                                      # blog posts
|   └── 2018-01-09-Learning-Programming.md
|   └── 2018-01-11-Crypto-Currency_Mania.md
|── about
|   └── index.html
|── blog
|   └── atom.xml                                # web feed template 
|   └── index.html
|── assets
|   └── Resume.pdf
|   └── Snow.jpg
|── css                               
|   └── main.css                                # main style page                        
|── index.html                                  # main page template

```
