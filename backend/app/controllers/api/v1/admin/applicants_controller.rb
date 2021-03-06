# frozen_string_literal: true

class Api::V1::Admin::ApplicantsController < ApplicationController
    before_action :find_applicant, only: :show

    # GET /applicants
    def index
        if params[:session_id].blank?
            render_success Applicant.order(:id)
            return
        end
        render_success Applicant.by_session(params[:session_id])
    end

    def show
        render_success @applicant
    end

    # POST /applicants
    def create
        @applicant = Applicant.find_by(id: params[:id])
        update && return if @applicant
        @applicant = Applicant.new(applicant_params)
        render_on_condition(
            object: @applicant, condition: proc { @applicant.save! }
        )
    end

    private

    def find_applicant
        @applicant = Applicant.find(params[:id])
    end

    def applicant_params
        params.slice(
            :email,
            :first_name,
            :last_name,
            :phone,
            :student_number,
            :utorid
        ).permit!
    end

    def update
        render_on_condition(
            object: @applicant,
            condition: proc { @applicant.update!(applicant_params) }
        )
    end
end
