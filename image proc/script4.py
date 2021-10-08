import cv2

img=cv2.imread("img2.jpg",0)

#print(type(img))
#print(img)

resized_image=cv2.resize(img,(int(img.shape[1]/4),int(img.shape[0]/4)))
cv2.imshow("img2",resized_image)
cv2.imwrite("img2_resized.jpg",resized_image)
cv2.waitKey(5000)
cv2.destroyAllWindows()