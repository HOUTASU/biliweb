# encoding: utf-8

"""
@author: sw
@contact: 237298062@qq.com
@software: PyCharm
@time: 2019/4/10 17:15
"""

import pymongo


class MongoConnect(object):
    def __init__(self):
        self.mongo_uri = 'mongodb://admin:051072@148.70.23.117:27017/'
        self.mongo_db = 'bilibili'

    def get_connection(self):
        c = pymongo.MongoClient(self.mongo_uri)
        db = c[self.mongo_db]
        return db
