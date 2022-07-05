# Neural Network Model Manager

import numpy as np
from paddlers.deploy import Predictor

class Singleton(object): 
    
    def __new__(cls):
        if not hasattr(cls,'_instance'):
            orig = super(Singleton, cls)
            cls._instance = orig.__new__(cls) # singleton
            cls._instance.init()
        return cls._instance


class ModelManager(Singleton):
    
    def init(self) -> None:
        self.__lut = np.zeros((256,3), dtype=np.uint8)
        self.__lut[0] = [255, 0, 0]
        self.__lut[1] = [30, 255, 142]
        self.__lut[2] = [60, 0, 255]
        self.__lut[3] = [255, 222, 0]
        self.__lut[4] = [0, 0, 0]

        print(' Init Model '.center(50, '='))

        self.__bit = Predictor("../static_models/bitx1024", use_gpu=True)
        self.__road = Predictor("../static_models/roadx256",use_gpu=True) 
        self.__divide = Predictor("../static_models/devidex256", use_gpu=True)
        self.__classify = Predictor("../static_models/classifyx1024", use_gpu=True)

        print(' Model Loaded '.center(50, '='))

        # About 4G GPU memories used 

    def bit_model(self, image_t1:str, image_t2:str) -> np.ndarray:
        out = self.__bit.predict((image_t1, image_t2))['label_map']
        return np.uint8(out*255)

    def road_model(self, image:str) -> np.ndarray:
        out = self.__road.predict(image)
        out = out['score_map'].transpose((2,0,1))[1]
        out = (out>0.3).astype("uint8")
        return np.uint8(out*255)

    def divide_model(self, image:str) -> np.ndarray:
        label = self.__divide.predict(image)['label_map']
        out = self.__lut[label]
        return out

    def classify_model(self, image:str) -> str:
        out = self.__classify.predict(image)[0]
        return out