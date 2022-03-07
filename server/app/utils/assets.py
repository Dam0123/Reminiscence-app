import os


BASE_PATHS = 'app/static/image'

def join_assets(_type='defaults', filename=None):

    if filename:
        return os.path.join(BASE_PATHS, filename)
    return os.path.join(BASE_PATHS)

def __save_image(path, filename, file):
    if not os.path.isdir(path):
        os.mkdir(path)
    
    save = file.save(os.path.join(path, filename))
    print(save)

def save_item(filename=None, file=None):
    if filename and file:
        path = join_assets()
        print(path, filename)
        __save_image(path, filename, file)


