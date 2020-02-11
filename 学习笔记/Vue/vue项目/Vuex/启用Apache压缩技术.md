为了请求文件小点

启用Apache压缩技术

- 1  打开  httpd.conf

- 2  启用两项

  - #LoadModule deflate_module modules/mod_deflate.so
  - #LoadModule header_module modules/mod_headers.so

- 3  在文件最后

  - ```
    <IfModule deflate_module>
    	#必须的，就想开关一样，告诉Apache对浏览器的内用进行压缩
    	SetOutputFilter DEFLATE
    	DeflateCompressionLeval 9
    </IfModule>
    ```

  - 