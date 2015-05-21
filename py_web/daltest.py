#!/usr/bin/python
# -*- coding: UTF-8 -*

#测试后台方法的页面
__author__ = 'wenqing'
from tornado.web import RequestHandler

class DalTestHandelr(RequestHandler):
    def get(self):
        self.render('daltest.html')