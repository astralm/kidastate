import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import VerticalNonLinear from '../routes/forms/routes/steppers/components/VerticalNonLinear';



//
class FormSteps extends React.Component {
    state = {
        open: true,
        stepIndex: 0,
    };
    handleNext = () => {
        const {stepIndex} = this.state;
        if (stepIndex < 2) {
            this.setState({stepIndex: stepIndex + 1});
        }
    };

    handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
    };
    render() {
        const actions = [
            <FlatButton
                label="Назад"
                primary
                onTouchTap={this.handlePrev}
            />,
            <FlatButton
                label="Вперед"
                primary
                keyboardFocused
                onTouchTap={this.handleNext}
            />,
        ];

        return (
            <div className="col-lg-6">
                <div className="box box-transparent">
                    <div className="box-body">
                        <Dialog title="Создание нового сотрудника" actions={actions} modal={false} open={this.state.open} onRequestClose={this.handleClose}>
                            <VerticalNonLinear stepIndex={this.state.stepIndex}/>
                        </Dialog>
                    </div>
                </div>
            </div>
        );
    }
}


module.exports = FormSteps;