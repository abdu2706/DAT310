from flask import Flask, jsonify, render_template

app = Flask(__name__)

# Sample data for albums and tracks (replace with your actual data loading code)
albums_data = [
    {
        "album_id": 1,
        "artist": "Coldplay",
        "title": "A Rush of Blood to the Head",
        "cover_image": "album1_cover.png",
        "tracks": [
            {"title": "Politik", "duration": "5:18"},
            {"title": "In My Place", "duration": "3:48"},
            {"title": "God Put a Smile upon Your Face", "duration": "4:57"},
            {"title": "The Scientist", "duration": "5:09"},
            {"title": "Clocks", "duration": "5:07"},
            {"title": "Daylight", "duration": "5:27"},
            {"title": "Green Eyes", "duration": "3:43"},
            {"title": "Warning Sign", "duration": "5:31"},
            {"title": "A Whisper", "duration": "3:58"},
            {"title": "A Rush of Blood to the Head", "duration": "5:51"},
            {"title": "Amsterdam", "duration": "5:19"}
        ]
    },
    {
        "album_id": 2,
        "artist": "Guns N' Roses",
        "title": "Use Your Illusion I",
        "cover_image": "album2_cover.jpg",
        "tracks": [
            {"title": "Right Next Door to Hell", "duration": "3:02"},
            {"title": "Dust N' Bones", "duration": "4:58"},
            {"title": "Live and Let Die", "duration": "3:04"},
            {"title": "Don't Cry", "duration": "4:44"},
            {"title": "Perfect Crime", "duration": "2:23"},
            {"title": "You Ain't the First", "duration": "2:36"},
            {"title": "Bad Obsession", "duration": "5:28"},
            {"title": "Back Off Btch", "duration": "5:03"},
            {"title": "Double Talkin' Jive", "duration": "3:23"},
            {"title": "November Rain", "duration": "8:57"},
            {"title": "The Garden", "duration": "5:22"},
            {"title": "Garden of Eden", "duration": "2:41"},
            {"title": "Don't Dam Me", "duration": "5:18"},
            {"title": "Bad Apples", "duration": "4:28"},
            {"title": "Dead Horse", "duration": "4:17"},
            {"title": "Coma", "duration": "10:13"}
        ]
    },
        {
        "album_id": 3,
        "artist": "Coldplay",
        "title": "A Rush of Blood to the Head",
        "cover_image": "album3_cover.png",
        "tracks": [
            {"title": "Politik", "duration": "5:18"},
            {"title": "In My Place", "duration": "3:48"},
            {"title": "God Put a Smile upon Your Face", "duration": "4:57"},
            {"title": "The Scientist", "duration": "5:09"},
            {"title": "Clocks", "duration": "5:07"},
            {"title": "Daylight", "duration": "5:27"},
            {"title": "Green Eyes", "duration": "3:43"},
            {"title": "Warning Sign", "duration": "5:31"},
            {"title": "A Whisper", "duration": "3:58"},
            {"title": "A Rush of Blood to the Head", "duration": "5:51"},
            {"title": "Amsterdam", "duration": "5:19"}
        ]
    },
    {
        "album_id": 4,
        "artist": "Guns N' Roses",
        "title": "Use Your Illusion I",
        "cover_image": "album4_cover.png",
        "tracks": [
            {"title": "Right Next Door to Hell", "duration": "3:02"},
            {"title": "Dust N' Bones", "duration": "4:58"},
            {"title": "Live and Let Die", "duration": "3:04"},
            {"title": "Don't Cry", "duration": "4:44"},
            {"title": "Perfect Crime", "duration": "2:23"},
            {"title": "You Ain't the First", "duration": "2:36"},
            {"title": "Bad Obsession", "duration": "5:28"},
            {"title": "Back Off Btch", "duration": "5:03"},
            {"title": "Double Talkin' Jive", "duration": "3:23"},
            {"title": "November Rain", "duration": "8:57"},
            {"title": "The Garden", "duration": "5:22"},
            {"title": "Garden of Eden", "duration": "2:41"},
            {"title": "Don't Dam Me", "duration": "5:18"},
            {"title": "Bad Apples", "duration": "4:28"},
            {"title": "Dead Horse", "duration": "4:17"},
            {"title": "Coma", "duration": "10:13"}
        ]
    },
        {
        "album_id": 5,
        "artist": "Coldplay",
        "title": "A Rush of Blood to the Head",
        "cover_image": "album5_cover.png",
        "tracks": [
            {"title": "Politik", "duration": "5:18"},
            {"title": "In My Place", "duration": "3:48"},
            {"title": "God Put a Smile upon Your Face", "duration": "4:57"},
            {"title": "The Scientist", "duration": "5:09"},
            {"title": "Clocks", "duration": "5:07"},
            {"title": "Daylight", "duration": "5:27"},
            {"title": "Green Eyes", "duration": "3:43"},
            {"title": "Warning Sign", "duration": "5:31"},
            {"title": "A Whisper", "duration": "3:58"},
            {"title": "A Rush of Blood to the Head", "duration": "5:51"},
            {"title": "Amsterdam", "duration": "5:19"}
        ]
    },
    {
        "album_id": 6,
        "artist": "Guns N' Roses",
        "title": "Use Your Illusion I",
        "cover_image": "album6_cover.jpeg",
        "tracks": [
            {"title": "Right Next Door to Hell", "duration": "3:02"},
            {"title": "Dust N' Bones", "duration": "4:58"},
            {"title": "Live and Let Die", "duration": "3:04"},
            {"title": "Don't Cry", "duration": "4:44"},
            {"title": "Perfect Crime", "duration": "2:23"},
            {"title": "You Ain't the First", "duration": "2:36"},
            {"title": "Bad Obsession", "duration": "5:28"},
            {"title": "Back Off Btch", "duration": "5:03"},
            {"title": "Double Talkin' Jive", "duration": "3:23"},
            {"title": "November Rain", "duration": "8:57"},
            {"title": "The Garden", "duration": "5:22"},
            {"title": "Garden of Eden", "duration": "2:41"},
            {"title": "Don't Dam Me", "duration": "5:18"},
            {"title": "Bad Apples", "duration": "4:28"},
            {"title": "Dead Horse", "duration": "4:17"},
            {"title": "Coma", "duration": "10:13"}
        ]
    }
    
]

@app.route("/")
def index():
    return app.send_static_file("index.html")

@app.route("/albums")
def get_albums():
    return jsonify(albums_data)

@app.route("/albuminfo/<int:album_id>")
def get_album_info(album_id):
    for album in albums_data:
        if album["album_id"] == album_id:
            total_length = sum(int(track["duration"].split(":")[0]) * 60 + int(track["duration"].split(":")[1]) for track in album["tracks"])
            total_length_formatted = f"{total_length // 60}:{total_length % 60:02d}"
            album_info = {
                "cover_image": album["cover_image"],
                "tracks": album["tracks"],
                "total_length": total_length_formatted
            }
            return jsonify(album_info)
    return jsonify({"error": "Album not found"})
@app.route("/sample")
def sample():
    return app.send_static_file("index_static.html")
if __name__ == "__main__":
    app.run(debug=True)
