<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('place');
            $table->date('date');
            $table->unsignedBigInteger('category_id');
            $table->unsignedBigInteger('organization_id');
            $table->text('description');
            $table->string('guide');
            $table->string('contact');
            $table->timestamps();

            $table->foreign('organization_id')->references('id')
                ->on('organizations')->onDelete('cascade')->onUpdate('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('events');
    }
}
