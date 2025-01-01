
import tensorflow as tf 
from tensorflow.keras.preprocessing.image import ImageDataGenerator

# Define the paths to your training and testing datasets
train_data_dir = 'path/to/training/dataset'
test_data_dir = 'path/to/testing/dataset'

# Define the image dimensions and batch size
img_width, img_height = 224, 224
batch_size = 32

# Create an ImageDataGenerator for data augmentation and preprocessing
train_datagen = ImageDataGenerator(
    rescale=1.0/255.0,
    shear_range=0.2,
    zoom_range=0.2,
    horizontal_flip=True
)

test_datagen = ImageDataGenerator(rescale=1.0/255.0)

# Load and preprocess the training and testing datasets
train_generator = train_datagen.flow_from_directory(
    train_data_dir,
    target_size=(img_width, img_height),
    batch_size=batch_size,
    class_mode='binary'
)

test_generator = test_datagen.flow_from_directory(
    test_data_dir,
    target_size=(img_width, img_height),
    batch_size=batch_size,
    class_mode='binary'
)

# Define the model architecture
model = tf.keras.models.Sequential([
    tf.keras.layers.Conv2D(32, (3, 3), activation='relu', input_shape=(img_width, img_height, 3)),
    tf.keras.layers.MaxPooling2D(pool_size=(2, 2)),
    tf.keras.layers.Conv2D(64, (3, 3), activation='relu'),
    tf.keras.layers.MaxPooling2D(pool_size=(2, 2)),
    tf.keras.layers.Conv2D(128, (3, 3), activation='relu'),
    tf.keras.layers.MaxPooling2D(pool_size=(2, 2)),
    tf.keras.layers.Flatten(),
    tf.keras.layers.Dense(128, activation='relu'),
    tf.keras.layers.Dropout(0.5),
    tf.keras.layers.Dense(1, activation='sigmoid')
])

# Compile the model
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

# Train the model
model.fit(
    train_generator,
    steps_per_epoch=train_generator.samples // batch_size,
    epochs=10,
    validation_data=test_generator,
    validation_steps=test_generator.samples // batch_size
)

# Save the trained model
model.save('skin_cancer_detection_model.h5')
# Load the trained model
loaded_model = tf.keras.models.load_model('skin_cancer_detection_model.h5')

# Evaluate the model on the testing dataset
test_loss, test_accuracy = loaded_model.evaluate(test_generator, steps=test_generator.samples // batch_size)
print(f'Test Loss: {test_loss:.4f}')
print(f'Test Accuracy: {test_accuracy:.4f}')

# Make predictions on new images
new_image_path = 'path/to/new/image.jpg'
new_image = tf.keras.preprocessing.image.load_img(new_image_path, target_size=(img_width, img_height))
new_image = tf.keras.preprocessing.image.img_to_array(new_image)
new_image = new_image / 255.0  # Normalize the image
new_image = np.expand_dims(new_image, axis=0)  # Add batch dimension

prediction = loaded_model.predict(new_image)
if prediction[0][0] >= 0.5:
    print('The image is classified as malignant (skin cancer).')
else:
    print('The image is classified as benign (non-cancerous).')