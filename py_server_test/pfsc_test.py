#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = 'wenqing'


from tornado.web import RequestHandler
from py.control.pfsc_manager import PFSCManager
from py.common.response_entity import res_entity

class Test_PFSCHandler(RequestHandler):
    """
    批发商城
    """
    def get(self,method):
        _pfsc = PFSCManager()
        #code=self.get_argument('code')
        try:
            if method=='getlist':#获取所有批发城列表
                data = _pfsc.getData()
                result = res_entity.getSuccessEntity(data)
            if method=='getmainpagetop':#首页顶部列表获取
                data=_pfsc.getData(key='sMain',value='0')
                result = res_entity.getSuccessEntity(data)
        except Exception,error:
            result = res_entity.getErrorEntity(error)
        finally:
            self.finish(result)