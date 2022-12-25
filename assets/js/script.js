function enablePhotoUpload() {
  const imageInput = document.querySelector('#image-input');
  imageInput.addEventListener('change', function () {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const uploadImage = reader.result;
      changeMemePicture(uploadImage);
    });

    reader.readAsDataURL(this.files[0]);
  });
}

async function mapImageList() {
  const memesObject = [
    {
      name: 'chloe',
      path: 'assets/images/chloe.jpg',
    },
    {
      name: 'chapolin',
      path: 'assets/images/chapolin.jpg',
    },
    {
      name: 'funny-cat1',
      path: 'assets/images/funny-cat1.png',
    },
    {
      name: 'funny-cat2',
      path: 'assets/images/funny-cat2.png',
    },
  ];

  return memesObject;
}

async function createGallery(imageList) {
  const memeSelector = document.querySelector('#memes-list');
  imageList.forEach((picture) => {
    let newOption = document.createElement('option');
    newOption.text = picture.name.toUpperCase();
    newOption.value = picture.path;
    memeSelector.appendChild(newOption);
  });
}

async function changeMemePicture(photo) {
  let displayImage = document.querySelector('#display-image');
  displayImage.style.backgroundImage = `url('${photo}')`;
}

async function main() {
  const memesImageList = await mapImageList();
  enablePhotoUpload();
  await createGallery(memesImageList);
  await changeMemePicture(memesImageList[0].path);
}

main();
