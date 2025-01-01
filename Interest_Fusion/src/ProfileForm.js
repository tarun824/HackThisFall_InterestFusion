import React from 'react';
import './ProfileForm.css';

class ProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            edu: '',
            interests: '',
            bio: '',
            pic: null,
            privacy: 'public',
            contact: 'platform'
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleFileChange = (event) => {
        this.setState({
            pic: event.target.files[0]
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
    
        const { name, email, password, edu, interests, bio } = this.state;

        if (!name.trim() || !email.trim() || !password.trim() || !edu.trim() || !interests.trim() || !bio.trim()) {
            alert('All fields must be filled out');
            return;
        }
        
    
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegex.test(email)) {
            alert('Invalid email format');
            return;
        }
    
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            alert('Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character');
            return;
        }
    
        const interestsArray = interests.split(',');
if (interestsArray.some(interests => interests.trim() === '')) {
    alert('Interests must be comma-separated tags');
    return;
} 
if (bio.length > 500) {
    alert('Bio must be 500 characters or less');
    return;
}
        // Here you can handle form submission, e.g. send data to the backend
    }

    render() {
        return (
            <div className="container mt-5">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label><i class="fas fa-user"></i> Name</label>
                        <input type="text" className="form-control" placeholder="Enter Full Name" name="name" value={this.state.name} onChange={this.handleChange} required />
                    </div>
                    <div class="form-group">
                    <label for="email"><i class="fas fa-envelope"></i> Email</label>
                    <input type="email" class="form-control" placeholder="Enter Email" name="email" required></input>
                </div>
                <div class="form-group">
                    <label for="psw"><i class="fas fa-key"></i> Password</label>
                    <input type="password" class="form-control" placeholder="Enter Password" name="psw" required></input>
                </div>
                <div class="form-group">
                    <label for="edu"><i class="fas fa-school"></i> Education Institution</label>
                    <input type="text" class="form-control" placeholder="Enter Education Institution" name="edu"></input>
                </div>
                <div class="form-group">
                    <label for="interests"><i class="fas fa-brush"></i> Interests/Hobbies</label>
                    <textarea class="form-control" placeholder="Enter Interests/Hobbies" name="interests"></textarea>
                </div>
                <div class="form-group">
                    <label for="bio"><i class="fas fa-book"></i> Bio/Description</label>
                    <textarea class="form-control" placeholder="Enter Bio/Description" name="bio"></textarea>
                </div>

                <div class="form-group">
                    <label for="privacy"><i class="fas fa-lock"></i> Privacy Settings</label>
                    <select class="form-control" name="privacy">
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="contact"><i class="fas fa-phone"></i> Contact Preferences</label>
                    <select class="form-control" name="contact">
                        <option value="platform">Through Platform</option>
                        <option value="external">External Contact Details</option>
                    </select>
                </div>
                    <div className="form-group">
                        <label><i class="fas fa-image"></i> Profile Picture</label>
                        <input type="file" className="form-control-file" name="pic" onChange={this.handleFileChange} />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default ProfileForm;