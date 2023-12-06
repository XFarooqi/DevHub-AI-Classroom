import os
import uuid
from flask import Flask, render_template, request, session
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
from flask_sqlalchemy import SQLAlchemy

# Creating database connection and the table creation.
app.secret_key = "SecretKey"  # Secret Key for Image Ids
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:@localhost/NoCodePortfolio?unix_socket=/opt/lampp/var/mysql/mysql.sock'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


"""
This fumctioon simply redirect us to the Index.html file when the user first opens the website.
Here, @app.route("/") is a Python decorator that Flask provides to assign URLs in our app to functions easily.
And render_template is used to generate output from a template file based on the Jinja2 engine that is found in the application's templates folder. 
"""

@app.route('/')
@cross_origin()
def hello_world():
    # return '<div class="flask-content">' + render_template('index.html') + '</div>'
    return render_template('index.html')


@app.route('/display')
@cross_origin()
def display():
    return render_template('display.html')  # This will show the display page


"""
# This is the function that will be called when the user Select a template.
Here we are starting a session for the user.

While Methods are GET and POST.
In GET method we can not send large amount of data and request parameter is appended into the URL
In POST method we can send large amount of data and request parameter is appended into the body of the request.
"""

@app.route("/form/<string:display>", methods=["GET", "POST"])
def form(display):
    session["display_ses"] = display
    return render_template("form.html")


"""
This is the function that will be called when the user submits the form.
Here we are setting the condition for the if statement.
Like what will happen if user click on Design1 or Design2 or Design3.

"display_name" varribale will store the information of that tmeplate and when user submit the information, all the information will be pass in the variables of this particaulr tempalte.
"""

@app.route("/upload", methods=["GET", "POST"])
def upload():

    display_upload = session.get("display_ses")
    if display_upload == "design1":
        display_name = "Design1.html"
    elif display_upload == "design2":
        display_name = "Design2.html"
    elif display_upload == "design3":
        display_name = "Design3.html"
    elif display_upload == "design4":
        display_name = "Design4.html"

    if request.method == "POST":

        # Here all the Values that user enter in form are assigned to the variables.

        firstname = request.form.get("firstname")
        lastname = request.form.get("lastname")
        name = firstname+lastname
        school = request.form.get("school")
        college = request.form.get("college")
        phone = request.form.get("phone")
        email = request.form.get("email")
        skill1 = request.form.get("skill1")
        skill2 = request.form.get("skill2")
        skill3 = request.form.get("skill3")
        skill4 = request.form.get("skill4")
        about = request.form.get("about")
        img = request.form.get("img")


        # #All the values are stored in the entery variable sent to the Database.
        # entery = UserData(firstname=firstname, lastname=lastname, school=school, college=college, phone=phone, email=email, about=about, skill1=skill1, skill2=skill2, skill3=skill3, skill4=skill4)
        # db.session.add(entery)
        # db.session.commit()


# Email Generation
        # subject = "Congratulations!" + " " + firstname + \
        #     "" + lastname  # Subject of the Email
        # body = "You will get the Working Link of You Website Shortly!"  # Messae of the Email
        # msg = f'Subject: {subject}\n\n{body}'
        # server = smtplib.SMTP("smtp.gmail.com", 587)
        # server.starttls()
        # # Setting the Login Access
        # server.login("arfarooqix@gmail.com", "qjxlzmkgjgglqeqk")

        
        # #server.login("{Enter Email", "Enter Applcaiton Token from Gmail")
        
        # server.sendmail("arfarooqix@gmail.com", email,
        #                 msg)  # Sending the Email


# Assigning Ids to Images
        key = uuid.uuid1()  # Creating A Unique Id
        img = request.files["dp"]  # Getting the Image
        img.save(f"static/images/{img.filename}")  # Saving the Image
        img_new_name = f"{key}{img.filename}" # Renaming the Image with the Unique Id
        os.rename(f"static/images/{img.filename}",  # Taking Orignal Image and Chaning its Name with the Unique Id
                  f"static/images/{img_new_name}")


    return render_template(display_name, t_fname=firstname, t_lname=lastname, school=school, college=college, phone=phone, email=email, skill1=skill1, skill2=skill2, skill3=skill3, skill4=skill4, about=about, img=img_new_name)


if __name__ == '__main__':
    app.run(debug=True)
