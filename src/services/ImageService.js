class ImageService {
  _apiKey = '29633570-ed278bc3600c586f3f6eb946e';
  _page = 1;

  searchImage = async (page = this._page, searchText) => {
    const res = await fetch(
      `https://pixabay.com/api/?q=${searchText}&page=${page}&key=${this._apiKey}&image_type=photo&orientation=horizontal&per_page=12`
    );
    if (!res.ok) {
      throw new Error(`Could not fetch, status: ${res.status}`);
    }

    return await res.json();
  };

  getImages = async (page, searchText) => {
    const res = await this.searchImage(page, searchText);
    return await res.hits.map(image => this._transformImage(image));
  };

  _transformImage = image => {
    return {
      id: image.id,
      webformatURL: image.webformatURL,
      largeImageURL: image.largeImageURL,
    };
  };
}

export default ImageService;
